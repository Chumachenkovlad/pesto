import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VoteModel } from '@pesto/backend-entities';

import { VotesModelService } from './votes-model.service';

@Module({
  imports: [SequelizeModule.forFeature([VoteModel])],
  providers: [VotesModelService],
  exports: [VotesModelService],
})
export class VotesModelModule {}
