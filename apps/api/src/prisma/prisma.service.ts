import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@media-manager/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
