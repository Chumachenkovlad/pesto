import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostDto, PostFilter, PostModel } from '@pesto/backend-entities';
import { BaseEntityController, PostsModelService } from '@pesto/backend-nest-shared';

@ApiTags('Posts')
@Controller('posts')
export class PostsController extends BaseEntityController<
  PostModel,
  PostDto,
  PostFilter
>(PostModel, PostDto, PostFilter) {
  constructor(protected readonly entityService: PostsModelService) {
    super(entityService);
  }
}
