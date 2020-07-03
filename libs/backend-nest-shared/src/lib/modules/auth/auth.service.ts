import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from '@pesto/backend-entities';
import { JwtPayload } from '@pesto/public-interfaces';
import * as moment from 'moment';

import { ConfigService } from '../config/config.service';
import { UsersModelService } from '../users-model/users-model.service';
import { AuthPayloadDto } from './auth-payload.dto';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersModelService: UsersModelService,
    private readonly jwtService: JwtService
  ) {}

  async login(email: string, password: string): Promise<AuthPayloadDto> {
    const user = await this.usersModelService.findByEmail(email);

    if (!user) {
      throw new BadRequestException();
    }

    if (!user.authenticate(String(password))) {
      throw new BadRequestException();
    }

    const authPayload = this.createToken(user.id);
    const currentUser = await this.usersModelService.findById(user.id);

    return { ...authPayload, currentUser };
  }

  async validate({ id }: JwtPayload): Promise<UserModel> {
    return this.usersModelService.findById(id);
  }

  createToken(id: string): Pick<AuthPayloadDto, 'expires' | 'token'> {
    const expires = moment()
      .add(this.configService.tokenExpirationTime, 's')
      .toISOString();

    const token = this.jwtService.sign(
      { id },
      {
        expiresIn: this.configService.tokenExpirationTime,
      }
    );

    return { token, expires };
  }

  async loginByUserId(userId: string) {
    const authPayload = this.createToken(userId);
    const currentUser = await this.usersModelService.findById(userId);

    return { ...authPayload, currentUser };
  }

  async register(userDto: AuthDto): Promise<AuthPayloadDto> {
    const currentUser = await this.usersModelService.create(userDto);
    const authPayload = await this.createToken(currentUser.id);
    return {
      ...authPayload,
      currentUser,
    };
  }
}
