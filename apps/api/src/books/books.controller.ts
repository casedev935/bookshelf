import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('search')
  search(@Query('q') query: string) {
    return this.booksService.searchGoogleBooks(query);
  }

  @Post()
  create(@Request() req: any, @Body() body: any) {
    return this.booksService.create(req.user.userId, body);
  }

  @Get()
  findAll(@Request() req: any) {
    return this.booksService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Request() req: any, @Param('id') id: string) {
    return this.booksService.findOne(req.user.userId, id);
  }

  @Patch(':id')
  update(@Request() req: any, @Param('id') id: string, @Body() body: any) {
    return this.booksService.update(req.user.userId, id, body);
  }

  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    return this.booksService.remove(req.user.userId, id);
  }
}
