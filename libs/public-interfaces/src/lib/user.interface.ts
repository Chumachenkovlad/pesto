export interface IUser {
  id: string;
  lastName: string;
  firstName: string;
  avatarUrl: string;
}

type AdditionalUserProps = 'avatarUrl' | 'firstName' | 'lastName'

export type IUserDto = Partial<Pick<IUser, AdditionalUserProps>>;
