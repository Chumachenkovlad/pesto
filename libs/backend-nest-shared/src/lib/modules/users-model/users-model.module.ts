import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@pesto/backend-entities';

import { UsersModelService } from './users-model.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersModelService],
  exports: [SequelizeModule, UsersModelService]
})
export class UsersModelModule {}
