import { Controller } from '@nestjs/common';
import { PostDto, PostFilter, PostModel } from '@pesto/backend-entities';
import { BaseEntityController, PostsModelService } from '@pesto/backend-nest-shared';


@Controller('posts')
export class PostsController extends BaseEntityController<PostModel, PostDto, PostFilter> {
  constructor(protected readonly entityService: PostsModelService) {
    super(entityService);
  }
}
