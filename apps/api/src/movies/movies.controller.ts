import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Request() req: any, @Body() body: any) {
    return this.moviesService.create(req.user.userId, body);
  }

  @Get('search')
  search(@Query('q') q: string) {
    return this.moviesService.searchTMDB(q);
  }

  @Get()
  findAll(@Request() req: any) {
    return this.moviesService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Request() req: any, @Param('id') id: string) {
    return this.moviesService.findOne(req.user.userId, id);
  }

  @Patch(':id')
  update(@Request() req: any, @Param('id') id: string, @Body() body: any) {
    return this.moviesService.update(req.user.userId, id, body);
  }

  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    return this.moviesService.remove(req.user.userId, id);
  }
}
