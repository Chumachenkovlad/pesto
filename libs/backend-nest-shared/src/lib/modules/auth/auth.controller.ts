import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { AuthPayloadDto } from './auth-payload.dto';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

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
}
