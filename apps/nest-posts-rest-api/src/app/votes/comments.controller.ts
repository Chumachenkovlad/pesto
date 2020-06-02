import { Controller } from '@nestjs/common';
import { Vote, VoteDto, VoteFilter } from '@pesto/backend-entities';
import { BaseEntityController, VotesModelService } from '@pesto/backend-nest-shared';


@Controller('votes')
export class VotesController extends BaseEntityController<Vote, VoteDto, VoteFilter> {
  constructor(protected readonly entityService: VotesModelService) {
    super(entityService);
  }
}
