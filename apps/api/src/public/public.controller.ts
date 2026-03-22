import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('public')
export class PublicController {
  constructor(private readonly usersService: UsersService) {}

  @Get('u/:username')
  async getPublicProfile(@Param('username') username: string) {
    const user = await this.usersService.findByUsername(username) as any;

    if (!user || !user.is_public) {
      throw new NotFoundException('Public profile not found');
    }

    // Explicitly return ONLY public fields
    return {
      name: user.name,
      username: user.username,
      profile_picture_url: user.profile_picture_url,
      movies: user.movies,
      books: user.books,
      series: user.series,
    };
  }
}
