import { IUserDto } from '@pesto/public-interfaces';

export class UserDto implements IUserDto {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  email: string;
}
