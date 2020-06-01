import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category, CategoryDto, CategoryFilter } from '@pesto/backend-entities';
import { Sequelize } from 'sequelize-typescript';

import { BaseEntityService } from '../../base/base-entity.service';


@Injectable()
export class CategoryModelService extends BaseEntityService<Category, CategoryDto, CategoryFilter> {
  constructor(
    @InjectModel(Category)
    model: typeof Category,
    sequelize: Sequelize
  ) {
    super(model, sequelize);
  }
}
