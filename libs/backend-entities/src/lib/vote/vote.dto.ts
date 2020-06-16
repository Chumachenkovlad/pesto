import { ApiProperty } from '@nestjs/swagger';
import { IVoteDto } from '@pesto/public-interfaces';

export class VoteDto implements IVoteDto {
  @ApiProperty()
  postId: string;
  @ApiProperty()
  authorId: string;
}
