import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post, PostDto, PostFilter } from '@pesto/backend-entities';
import { Sequelize } from 'sequelize-typescript';

import { BaseEntityService } from '../../base/base-entity.service';

@Injectable()
export class PostsModelService extends BaseEntityService<Post, PostDto, PostFilter> {
  protected findAllEntityAttributes = ['id', 'body', 'title', 'slug', 'body', 'imageUrl', 'authorId'];

  constructor(
    @InjectModel(Post)
    model: typeof Post,
    sequelize: Sequelize
  ) {
    super(model, sequelize);
  }
}
