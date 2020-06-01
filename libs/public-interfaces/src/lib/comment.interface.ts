export interface IComment {
  id: string;
  authorId: string;
  postId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

export type ICommentDto = Omit<IComment, 'id' |'createdAt' | 'updatedAt'>;
