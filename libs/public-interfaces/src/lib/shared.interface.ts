export interface IEntitiesListRes<M, F> {
  rows: M[];
  filter: F;
  pagination: IPaginationDto;
  sorting: ISorting;
}

export interface IPagination {
  limit: number;
  offset: number;
}

export type IPaginationDto = IPagination & { count: number };

export interface ISorting {
  prop: string;
  direction: SortingDirection;
}

export type SortingDirection = 'ASC' | 'DESC';

export type IFindAllQuery<F extends object = any> = Partial<{
  filter: F;
  pagination: IPagination;
  sorting: ISorting;
  scope: string;
  include: string;
}>;

export type IFindOneQuery = Partial<{
  scope: string;
}>;

export interface AuthCredentials {
  email: string;
  password: string;
}
