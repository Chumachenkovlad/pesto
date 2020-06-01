export interface ICategory {
  id: string;
  name: string;
}

export type ICategoryDto = Omit<ICategory, 'id'>;
