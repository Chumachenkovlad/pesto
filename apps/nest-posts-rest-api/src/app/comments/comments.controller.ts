import { Controller } from '@nestjs/common';
import { Comment, CommentDto, CommentFilter } from '@pesto/backend-entities';
import { BaseEntityController, CommentsModelService } from '@pesto/backend-nest-shared';


@Controller('comments')
export class CommentsController extends BaseEntityController<Comment, CommentDto, CommentFilter> {
  constructor(protected readonly entityService: CommentsModelService) {
    super(entityService);
  }
}
