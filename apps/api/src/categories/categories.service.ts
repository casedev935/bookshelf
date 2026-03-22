import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(name: string, type: 'movie' | 'book') {
    const existing = await this.prisma.category.findFirst({
      where: { name, type },
    });
    if (existing) {
      throw new ConflictException('Category already exists for this type');
    }
    return this.prisma.category.create({ data: { name, type } });
  }

  async findAll(type?: 'movie' | 'book') {
    const where = type ? { type } : {};
    return this.prisma.category.findMany({ where, orderBy: { name: 'asc' } });
  }

  async update(id: number, name: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFoundException('Category not found');
    return this.prisma.category.update({ where: { id }, data: { name } });
  }

  async remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
