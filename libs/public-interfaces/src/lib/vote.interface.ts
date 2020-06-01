export interface IVote {
  id: string;
  postId: string;
  authorId: string;
}

export type IVoteDto = Omit<IVote, 'id'>;
