import { UserModel } from '@pesto/backend-entities';
import { IAuthPayload } from '@pesto/public-interfaces';

export class AuthPayloadDto implements IAuthPayload {
  token: string;
  expires: string;
  currentUser: UserModel;
}
