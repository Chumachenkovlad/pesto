import { ICategory } from './category.interface';

export interface IPost {
  id: string;
  title: string;
  slug: string;
  body: string;
  imageUrl: string;
  authorId: string;
  votesCount: number;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
  categories: ICategory[];
}
