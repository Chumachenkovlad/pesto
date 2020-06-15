import { Controller } from '@nestjs/common';
import { CommentFilter, CommentMessageDto, CommentModel } from '@pesto/backend-entities';
import { BaseEntityController, CommentsModelService } from '@pesto/backend-nest-shared';


@Controller('comments')
export class CommentsController extends BaseEntityController<CommentModel, CommentMessageDto, CommentFilter> {
  constructor(protected readonly entityService: CommentsModelService) {
    super(entityService);
  }
}
