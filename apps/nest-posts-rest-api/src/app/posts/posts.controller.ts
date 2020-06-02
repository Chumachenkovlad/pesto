import { Controller } from '@nestjs/common';
import { Post, PostDto, PostFilter } from '@pesto/backend-entities';
import { BaseEntityController, PostsModelService } from '@pesto/backend-nest-shared';


@Controller('posts')
export class PostsController extends BaseEntityController<Post, PostDto, PostFilter> {
  constructor(protected readonly entityService: PostsModelService) {
    super(entityService);
  }
}
