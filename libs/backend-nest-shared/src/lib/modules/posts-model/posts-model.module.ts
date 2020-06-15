import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostModel } from '@pesto/backend-entities';

import { PostsModelService } from './posts-model.service';

@Module({
  imports: [SequelizeModule.forFeature([PostModel])],
  providers: [PostsModelService],
  exports: [PostsModelService],
})
export class PostsModelModule {}
