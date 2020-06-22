import { IUser } from './user.interface';

export interface IAuthPayload {
  token: string;
  expires: string;
  currentUser: IUser;
}

export interface JwtPayload {
  id: string;
}

export interface IAuthDto {
  email: string;
  password: string;
}
