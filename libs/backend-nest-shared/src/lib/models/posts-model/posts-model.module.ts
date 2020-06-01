import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from '@pesto/backend-entities';

import { PostsModelService } from './posts-model.service';

@Module({
  imports: [SequelizeModule.forFeature([Post])],
  providers: [PostsModelService],
  exports: [SequelizeModule, PostsModelService]
})
export class PostsModelModule {}
