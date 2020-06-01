import { IVoteDto } from '@pesto/public-interfaces';

export class VoteDto implements IVoteDto {
  postId: string;
  authorId: string;
}
