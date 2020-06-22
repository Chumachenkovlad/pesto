import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VoteDto, VoteFilter, VoteModel } from '@pesto/backend-entities';
import { BaseEntityController, VotesModelService } from '@pesto/backend-nest-shared';

@ApiTags('Votes')
@Controller('votes')
export class VotesController extends BaseEntityController<
  VoteModel,
  VoteDto,
  VoteFilter
>(VoteModel, VoteDto, VoteFilter) {
  constructor(protected readonly entityService: VotesModelService) {
    super(entityService);
  }
}
