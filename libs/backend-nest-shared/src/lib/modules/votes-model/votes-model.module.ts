import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Vote } from '@pesto/backend-entities';

import { VotesModelService } from './votes-model.service';

@Module({
  imports: [SequelizeModule.forFeature([Vote])],
  providers: [VotesModelService],
  exports: [SequelizeModule, VotesModelService]
})
export class VotesModelModule {}
