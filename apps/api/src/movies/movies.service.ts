import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MoviesService {

  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async create(userId: string, data: any) {
    const { title, release_year } = data;
    
    // Check for duplicates (Title + Year for same user)
    const existing = await this.prisma.movie.findFirst({
      where: {
        user_id: userId,
        title: { equals: title, mode: 'insensitive' },
        release_year: release_year ? Number(release_year) : null,
      },
    });

    if (existing) {
      throw new ConflictException('This movie is already in your list');
    }

    return this.prisma.movie.create({
      data: {
        ...data,
        release_year: data.release_year ? Number(data.release_year) : null,
        user_id: userId,
      },
    });
  }

  async searchTMDB(query: string) {
    if (!query || query.length < 3) return [];
    
    const apiKey = this.configService.get<string>('TMDB_API_KEY');
    const tmdbBaseUrl = this.configService.get<string>('TMDB_BASE_URL') ?? 'https://api.themoviedb.org/3';

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${tmdbBaseUrl}/search/movie`, {
          params: {
            api_key: apiKey,
            query,
            language: 'pt-BR',
          },
        }),
      );

      const results = response.data.results.slice(0, 5);

      // For each result, try to find the director in credits
      return await Promise.all(results.map(async (movie: any) => {
        const creditsResponse = await firstValueFrom(
          this.httpService.get(`${tmdbBaseUrl}/movie/${movie.id}/credits`, {
            params: { api_key: apiKey },
          }),
        );
        
        const director = creditsResponse.data.crew.find((p: any) => p.job === 'Director')?.name;
        
        return {
          tmdbId: movie.id,
          title: movie.title,
          release_year: movie.release_date ? new Date(movie.release_date).getFullYear() : null,
          poster_url: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
          director: director || 'Unknown',
        };
      }));
    } catch (error) {
      console.error('TMDB Search Error:', error.message);
      return [];
    }
  }

  async findAll(userId: string) {
    return this.prisma.movie.findMany({
      where: { user_id: userId },
      include: { category: true },
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(userId: string, id: string) {
    const movie = await this.prisma.movie.findFirst({
      where: { id, user_id: userId },
      include: { category: true },
    });
    if (!movie) throw new NotFoundException('Movie not found');
    return movie;
  }

  async update(userId: string, id: string, data: any) {
    await this.findOne(userId, id); // Prevent IDOR

    // Only allow valid Movie fields for update
    const { title, release_year, director, category_id, poster_url, status, watched_at } = data;
    const cleanData: any = {};
    if (title !== undefined) cleanData.title = title;
    if (release_year !== undefined) cleanData.release_year = release_year ? Number(release_year) : null;
    if (director !== undefined) cleanData.director = director;
    if (category_id !== undefined) cleanData.category_id = category_id;
    if (poster_url !== undefined) cleanData.poster_url = poster_url;
    if (status !== undefined) cleanData.status = status;
    if (watched_at !== undefined) cleanData.watched_at = watched_at ? new Date(watched_at) : null;

    return this.prisma.movie.update({
      where: { id },
      data: cleanData,
    });
  }

  async remove(userId: string, id: string) {
    await this.findOne(userId, id); // Prevent IDOR
    return this.prisma.movie.delete({
      where: { id },
    });
  }
}
