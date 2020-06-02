import { Module } from '@nestjs/common';
import { UsersModelModule } from '@pesto/backend-nest-shared';

import { UsersController } from './users.controller';

@Module({
  imports: [UsersModelModule],
  controllers: [UsersController]
})
export class UsersModule {}
