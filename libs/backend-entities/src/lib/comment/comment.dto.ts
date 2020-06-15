import { ICommentMessageDto } from '@pesto/public-interfaces';

export class CommentMessageDto implements ICommentMessageDto {
  body: string;
  postId: string;
  authorId: string;
}
