import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeriesService {
  private readonly tmdbApiKey: string;

  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.tmdbApiKey = this.configService.get<string>('TMDB_API_KEY') || '';
  }

  async searchTMDB(query: string) {
    if (!query || query.length < 3) return [];

    try {
      const response = await firstValueFrom(
        this.httpService.get(`https://api.themoviedb.org/3/search/tv`, {
          params: {
            api_key: this.tmdbApiKey,
            query,
            language: 'pt-BR',
          },
        }),
      );

      const items = response.data.results || [];
      return items.map((item: any) => ({
        tmdbId: item.id,
        title: item.name, // TV uses 'name' instead of 'title'
        release_year: item.first_air_date ? new Date(item.first_air_date).getFullYear() : null,
        poster_url: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
      }));
    } catch (error) {
      console.error('TMDB Search Error:', error);
      return [];
    }
  }

  async create(userId: string, data: any) {
    const { title, release_year } = data;
    
    // Check for duplicates
    const existing = await this.prisma.series.findFirst({
      where: {
        user_id: userId,
        title: { equals: title, mode: 'insensitive' },
        release_year: release_year ? Number(release_year) : null,
      },
    });

    if (existing) {
      throw new ConflictException('This series is already in your list');
    }

    return this.prisma.series.create({
      data: {
        ...data,
        release_year: data.release_year ? Number(data.release_year) : null,
        user_id: userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.series.findMany({
      where: { user_id: userId },
      include: { category: true },
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(userId: string, id: string) {
    const series = await this.prisma.series.findFirst({
      where: { id, user_id: userId },
      include: { category: true },
    });
    if (!series) throw new NotFoundException('Series not found');
    return series;
  }

  async update(userId: string, id: string, data: any) {
    await this.findOne(userId, id); // Prevent IDOR

    const { title, release_year, category_id, poster_url, status } = data;
    const cleanData: any = {};
    if (title !== undefined) cleanData.title = title;
    if (release_year !== undefined) cleanData.release_year = release_year ? Number(release_year) : null;
    if (category_id !== undefined) cleanData.category_id = category_id;
    if (poster_url !== undefined) cleanData.poster_url = poster_url;
    if (status !== undefined) cleanData.status = status;

    return this.prisma.series.update({
      where: { id },
      data: cleanData,
    });
  }

  async remove(userId: string, id: string) {
    await this.findOne(userId, id); // Prevent IDOR
    return this.prisma.series.delete({
      where: { id },
    });
  }
}
