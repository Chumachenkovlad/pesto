import { IPostDto } from '@pesto/public-interfaces';

export class PostDto implements IPostDto {
  authorId: string;
  slug: string;
  title: string;
  body: string;
  imageUrl?: string;
  visible?: boolean;
}
