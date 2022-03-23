import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('guarded')
  @UseGuards(AuthGuard)
  getGuardedMessage(): string {
    return 'This is the super secret message! For real! Believe me!';
  }
}
