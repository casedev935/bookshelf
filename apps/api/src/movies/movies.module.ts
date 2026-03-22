import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
