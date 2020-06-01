import { ICommentDto } from '@pesto/public-interfaces';

export class CommentDto implements ICommentDto {
  body: string;
  postId: string;
  authorId: string;
}
