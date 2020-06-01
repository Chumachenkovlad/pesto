export interface IUser {
  id: string;
  email: string;
  lastName: string;
  firstName: string;
  avatarUrl: string;
}

type RequiredUserProps = 'email';
type AdditionalUserProps = 'avatarUrl' | 'firstName' | 'lastName'

export type IUserDto = Pick<IUser, RequiredUserProps> & Partial<Pick<IUser, AdditionalUserProps>>;
