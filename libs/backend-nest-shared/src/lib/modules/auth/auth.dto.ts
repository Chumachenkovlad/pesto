import { IAuthDto } from '@pesto/public-interfaces';

export class AuthDto implements IAuthDto {
  readonly email: string;
  readonly password: string;
}
