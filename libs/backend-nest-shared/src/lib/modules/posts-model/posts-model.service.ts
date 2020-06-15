import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PostDto, PostFilter, PostModel } from '@pesto/backend-entities';
import { Sequelize } from 'sequelize-typescript';

import { BaseEntityService } from '../../base/base-entity.service';

@Injectable()
export class PostsModelService extends BaseEntityService<PostModel, PostDto, PostFilter> {
  protected entityAttributes = ['id', 'body', 'title', 'slug', 'body', 'imageUrl', 'authorId'];

  constructor(
    @InjectModel(PostModel)
    model: typeof PostModel,
    sequelize: Sequelize
  ) {
    super(model, sequelize);
  }
}
