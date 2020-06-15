import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryModel } from '@pesto/backend-entities';

import { CategoryModelService } from './category-model.service';

@Module({
  imports: [SequelizeModule.forFeature([CategoryModel])],
  providers: [CategoryModelService],
  exports: [CategoryModelService],
})
export class CategoryModelModule {}
