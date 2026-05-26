import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
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

    const {
      title,
      release_year,
      author,
      category_id,
      cover_url,
      status,
      started_reading_at,
      finished_reading_at,
    } = data;
    const cleanData: any = {};
    if (title !== undefined) cleanData.title = title;
    if (release_year !== undefined)
      cleanData.release_year = release_year ? Number(release_year) : null;
    if (author !== undefined) cleanData.author = author;
    if (category_id !== undefined) cleanData.category_id = category_id;
    if (cover_url !== undefined) cleanData.cover_url = cover_url;
    if (status !== undefined) cleanData.status = status;
    if (started_reading_at !== undefined)
      cleanData.started_reading_at = started_reading_at
        ? new Date(started_reading_at)
        : null;
    if (finished_reading_at !== undefined)
      cleanData.finished_reading_at = finished_reading_at
        ? new Date(finished_reading_at)
        : null;

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

    // 1. Try Open Library API first (Free, excellent metadata, high-quality covers)
    try {
      const response = await firstValueFrom(
        this.httpService.get('https://openlibrary.org/search.json', {
          params: {
            q: query,
            limit: 5,
            fields: 'key,title,author_name,first_publish_year,cover_i',
          },
          timeout: 5000,
        }),
      );

      const docs = response.data.docs || [];
      if (docs.length > 0) {
        return docs.map((doc: any) => {
          return {
            id: doc.key.replace('/works/', ''),
            title: doc.title,
            author: doc.author_name ? doc.author_name.join(', ') : 'Unknown',
            release_year: doc.first_publish_year || null,
            cover_url: doc.cover_i
              ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
              : null,
          };
        });
      }
    } catch (olError: any) {
      console.warn(
        'Open Library API failed, trying fallback to Google Books:',
        olError.message || olError,
      );
    }

    // 2. Fallback to Google Books API (revised, searching free-text instead of strictly intitle)
    try {
      const response = await firstValueFrom(
        this.httpService.get('https://www.googleapis.com/books/v1/volumes', {
          params: {
            q: query,
            maxResults: 5,
            printType: 'books',
          },
          timeout: 5000,
        }),
      );

      const items = response.data.items || [];
      return items.map((item: any) => {
        const info = item.volumeInfo;

        // Robust year parsing (handles YYYY-MM-DD, YYYY-MM, or YYYY formats reliably)
        let year: number | null = null;
        if (info.publishedDate) {
          const match = info.publishedDate.match(/^\d{4}/);
          if (match) {
            year = parseInt(match[0], 10);
          }
        }

        // Clean cover image url to use https and fallback if thumbnail is missing
        let coverUrl = null;
        if (info.imageLinks) {
          coverUrl =
            info.imageLinks.thumbnail || info.imageLinks.smallThumbnail || null;
          if (coverUrl) {
            coverUrl = coverUrl.replace(/^http:/, 'https:');
          }
        }

        return {
          id: item.id,
          title: info.title,
          author: info.authors ? info.authors.join(', ') : 'Unknown',
          release_year: year,
          cover_url: coverUrl,
        };
      });
    } catch (gbError: any) {
      console.error(
        'Google Books API Fallback also failed:',
        gbError.message || gbError,
      );
      return [];
    }
  }
}
