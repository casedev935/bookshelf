import { Controller, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  async updateProfile(@Request() req: any, @Body() body: { username?: string, is_public?: boolean }) {
    return this.usersService.updateProfile(req.user.userId, body);
  }
}
