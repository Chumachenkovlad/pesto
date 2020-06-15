export interface ICommentMessage {
  id: string;
  authorId: string;
  postId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

export type ICommentMessageDto = Omit<ICommentMessage, 'id' |'createdAt' | 'updatedAt'>;
