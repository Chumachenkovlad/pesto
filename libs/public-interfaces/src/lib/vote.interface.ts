export interface IVote {
  postId: string;
  authorId: string;
}

export type IVoteDto = Omit<IVote, 'id'>;
