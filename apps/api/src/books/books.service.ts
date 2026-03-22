import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async create(userId: string, data: any) {
    const { title, release_year } = data;
    
    // Check for duplicates
    const existing = await this.prisma.book.findFirst({
      where: {
        user_id: userId,
        title: { equals: title, mode: 'insensitive' },
        release_year: release_year ? Number(release_year) : null,
      },
    });

    if (existing) {
      throw new ConflictException('This book is already in your list');
    }

    return this.prisma.book.create({
      data: {
        ...data,
        release_year: data.release_year ? Number(data.release_year) : null,
        user_id: userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.book.findMany({
      where: { user_id: userId },
      include: { category: true },
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(userId: string, id: string) {
    const book = await this.prisma.book.findFirst({
      where: { id, user_id: userId },
      include: { category: true },
    });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(userId: string, id: string, data: any) {
    await this.findOne(userId, id); // Prevent IDOR

    const { title, release_year, author, category_id, cover_url, status, started_reading_at, finished_reading_at } = data;
    const cleanData: any = {};
    if (title !== undefined) cleanData.title = title;
    if (release_year !== undefined) cleanData.release_year = release_year;
    if (author !== undefined) cleanData.author = author;
    if (category_id !== undefined) cleanData.category_id = category_id;
    if (cover_url !== undefined) cleanData.cover_url = cover_url;
    if (status !== undefined) cleanData.status = status;
    if (started_reading_at !== undefined) cleanData.started_reading_at = started_reading_at ? new Date(started_reading_at) : null;
    if (finished_reading_at !== undefined) cleanData.finished_reading_at = finished_reading_at ? new Date(finished_reading_at) : null;

    return this.prisma.book.update({
      where: { id },
      data: cleanData,
    });
  }

  async remove(userId: string, id: string) {
    await this.findOne(userId, id); // Prevent IDOR
    return this.prisma.book.delete({
      where: { id },
    });
  }

  async searchGoogleBooks(query: string) {
    if (!query || query.length < 3) return [];

    try {
      const response = await firstValueFrom(
        this.httpService.get('https://www.googleapis.com/books/v1/volumes', {
          params: {
            q: `intitle:${query}`,
            maxResults: 5,
            printType: 'books',
          },
        }),
      );

      const items = response.data.items || [];
      return items.map((item: any) => {
        const info = item.volumeInfo;
        const year = info.publishedDate ? new Date(info.publishedDate).getFullYear() : null;
        
        return {
          id: item.id,
          title: info.title,
          author: info.authors ? info.authors.join(', ') : 'Unknown',
          release_year: isNaN(year as number) ? null : year,
          cover_url: info.imageLinks?.thumbnail?.replace('http:', 'https:'),
        };
      });
    } catch (error) {
      console.error('Google Books API Error:', error);
      return [];
    }
  }
}
