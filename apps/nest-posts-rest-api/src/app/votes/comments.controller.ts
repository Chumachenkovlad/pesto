import { Controller } from '@nestjs/common';
import { VoteDto, VoteFilter, VoteModel } from '@pesto/backend-entities';
import { BaseEntityController, VotesModelService } from '@pesto/backend-nest-shared';


@Controller('votes')
export class VotesController extends BaseEntityController<VoteModel, VoteDto, VoteFilter> {
  constructor(protected readonly entityService: VotesModelService) {
    super(entityService);
  }
}
