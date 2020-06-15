import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentModel } from '@pesto/backend-entities';

import { CommentsModelService } from './comments-model.service';

@Module({
  imports: [SequelizeModule.forFeature([CommentModel])],
  providers: [CommentsModelService],
  exports: [CommentsModelService],
})
export class CommentsModelModule {}
