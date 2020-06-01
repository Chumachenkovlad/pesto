import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from '@pesto/backend-entities';

import { CategoryModelService } from './category-model.service';

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  providers: [CategoryModelService],
  exports: [SequelizeModule, CategoryModelService]
})
export class CategoryModelModule {}
