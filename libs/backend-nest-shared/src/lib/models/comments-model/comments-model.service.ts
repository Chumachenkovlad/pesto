import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment, CommentDto, CommentFilter } from '@pesto/backend-entities';
import { Sequelize } from 'sequelize-typescript';

import { BaseEntityService } from '../../base/base-entity.service';


@Injectable()
export class CommentsModelService extends BaseEntityService<Comment, CommentDto, CommentFilter> {
  constructor(
    @InjectModel(Comment)
    model: typeof Comment,
    sequelize: Sequelize
  ) {
    super(model, sequelize);
  }
}
