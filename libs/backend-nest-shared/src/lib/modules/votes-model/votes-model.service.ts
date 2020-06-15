import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VoteDto, VoteFilter, VoteModel } from '@pesto/backend-entities';
import { Sequelize } from 'sequelize-typescript';

import { BaseEntityService } from '../../base/base-entity.service';

@Injectable()
export class VotesModelService extends BaseEntityService<VoteModel, VoteDto, VoteFilter> {
  protected entityAttributes = ['id', 'authorId', 'postId'];
  constructor(
    @InjectModel(VoteModel)
    model: typeof VoteModel,
    sequelize: Sequelize
  ) {
    super(model, sequelize);
  }
}

