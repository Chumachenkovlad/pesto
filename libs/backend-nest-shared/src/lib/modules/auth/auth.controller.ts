import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '@pesto/shared';

import { UserModel } from './../../../../../backend-entities/src/lib/user/user.entity';
import { AuthPayloadDto } from './auth-payload.dto';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: () => AuthDto })
  @Post('login')
  async login(@Body() authDto: AuthDto): Promise<AuthPayloadDto> {
    const { email, password } = authDto;
    return await this.authService.login(email, password);
  }

  @ApiBody({ type: () => AuthDto })
  @Post('register')
  async register(@Body() authDto: AuthDto): Promise<AuthPayloadDto> {
    return this.authService.register(authDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('loginByToken')
  async authByToken(@CurrentUser() user: UserModel): Promise<AuthPayloadDto> {
    return this.authService.loginByUserId(user.id);
  }
}
