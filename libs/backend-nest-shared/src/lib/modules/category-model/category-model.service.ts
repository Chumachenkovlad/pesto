import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CategoryDto, CategoryFilter, CategoryModel } from '@pesto/backend-entities';
import { Sequelize } from 'sequelize-typescript';

import { BaseEntityService } from '../../base/base-entity.service';


@Injectable()
export class CategoryModelService extends BaseEntityService<CategoryModel, CategoryDto, CategoryFilter> {
  protected entityAttributes = ['id', 'name'];
  constructor(
    @InjectModel(CategoryModel)
    model: typeof CategoryModel,
    sequelize: Sequelize
  ) {
    super(model, sequelize);
  }
}
