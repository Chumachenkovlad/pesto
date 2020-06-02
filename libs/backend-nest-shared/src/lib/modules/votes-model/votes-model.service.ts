import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Vote, VoteDto, VoteFilter } from '@pesto/backend-entities';
import { Sequelize } from 'sequelize-typescript';

import { BaseEntityService } from '../../base/base-entity.service';

@Injectable()
export class VotesModelService extends BaseEntityService<Vote, VoteDto, VoteFilter> {
  protected entityAttributes = ['id', 'authorId', 'postId'];
  constructor(
    @InjectModel(Vote)
    model: typeof Vote,
    sequelize: Sequelize
  ) {
    super(model, sequelize);
  }
}

