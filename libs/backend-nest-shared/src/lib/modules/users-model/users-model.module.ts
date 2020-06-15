import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '@pesto/backend-entities';

import { UsersModelService } from './users-model.service';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  providers: [UsersModelService],
  exports: [UsersModelService],
})
export class UsersModelModule {}
