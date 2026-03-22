import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
