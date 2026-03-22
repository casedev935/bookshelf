import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const existingUser = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }
    const hashedPassword = await argon2.hash(data.password);
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password_hash: hashedPassword,
      },
      select: { id: true, name: true, email: true }, // Don't return password hash
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, username: true, is_public: true, profile_picture_url: true }
    });
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username } as any,
      select: {
        name: true,
        username: true,
        is_public: true,
        profile_picture_url: true,
        movies: {
          include: { category: true },
          orderBy: { created_at: 'desc' }
        },
        books: {
          include: { category: true },
          orderBy: { created_at: 'desc' }
        },
        series: {
          include: { category: true },
          orderBy: { created_at: 'desc' }
        }
      } as any
    });
  }

  async updateProfile(id: string, data: { username?: string, is_public?: boolean }) {
    // If username is provided, check if it's already taken
    if (data.username) {
      const existing = await this.prisma.user.findUnique({
        where: { username: data.username } as any
      });
      if (existing && existing.id !== id) {
        throw new ConflictException('Username already taken');
      }
    }

    return this.prisma.user.update({
      where: { id },
      data: data as any,
      select: { id: true, name: true, email: true, username: true, is_public: true } as any
    });
  }
}
