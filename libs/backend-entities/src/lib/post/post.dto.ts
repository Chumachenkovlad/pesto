import { ApiProperty } from '@nestjs/swagger';
import { IPostDto } from '@pesto/public-interfaces';

export class PostDto implements IPostDto {
  @ApiProperty()
  authorId: string;
  slug: string;
  title: string;
  body: string;
  imageUrl?: string;
  visible?: boolean;
}
