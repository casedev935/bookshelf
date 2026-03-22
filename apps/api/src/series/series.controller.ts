import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { SeriesService } from './series.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get('search')
  search(@Query('q') query: string) {
    return this.seriesService.searchTMDB(query);
  }

  @Post()
  create(@Request() req: any, @Body() body: any) {
    return this.seriesService.create(req.user.userId, body);
  }

  @Get()
  findAll(@Request() req: any) {
    return this.seriesService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Request() req: any, @Param('id') id: string) {
    return this.seriesService.findOne(req.user.userId, id);
  }

  @Patch(':id')
  update(@Request() req: any, @Param('id') id: string, @Body() body: any) {
    return this.seriesService.update(req.user.userId, id, body);
  }

  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    return this.seriesService.remove(req.user.userId, id);
  }
}
