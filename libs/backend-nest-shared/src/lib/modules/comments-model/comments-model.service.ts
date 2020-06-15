import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CommentFilter, CommentMessageDto, CommentModel } from '@pesto/backend-entities';
import { Sequelize } from 'sequelize-typescript';

import { BaseEntityService } from '../../base/base-entity.service';

@Injectable()
export class CommentsModelService extends BaseEntityService<
  CommentModel,
  CommentMessageDto,
  CommentFilter
> {
  constructor(
    @InjectModel(CommentModel)
    model: typeof CommentModel,
    sequelize: Sequelize
  ) {
    super(model, sequelize);
  }
}
