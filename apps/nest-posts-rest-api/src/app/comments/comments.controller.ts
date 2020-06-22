import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommentFilter, CommentMessageDto, CommentModel } from '@pesto/backend-entities';
import { BaseEntityController, CommentsModelService } from '@pesto/backend-nest-shared';

@ApiTags('Commets')
@Controller('comments')
export class CommentsController extends BaseEntityController<
  CommentModel,
  CommentMessageDto,
  CommentFilter
>(CommentModel, CommentMessageDto, CommentFilter) {
  constructor(protected readonly entityService: CommentsModelService) {
    super(entityService);
  }
}
