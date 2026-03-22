import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [SeriesController],
  providers: [SeriesService],
})
export class SeriesModule {}
