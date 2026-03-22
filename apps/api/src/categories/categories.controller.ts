import { Controller, Get, Post, Patch, Body, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() body: { name: string; type: 'movie' | 'book' }) {
    return this.categoriesService.create(body.name, body.type);
  }

  @Get()
  findAll(@Query('type') type?: 'movie' | 'book') {
    return this.categoriesService.findAll(type);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('name') name: string) {
    return this.categoriesService.update(+id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
