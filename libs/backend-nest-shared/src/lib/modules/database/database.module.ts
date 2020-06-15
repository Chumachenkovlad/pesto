import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MODELS } from '@pesto/backend-entities';

import { DatabaseConfigService } from './database-config.service';

@Module({
  imports: [SequelizeModule.forFeature(MODELS)],
  exports: [SequelizeModule],
})
export class DatabaseModule {}

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
  ],
  providers: [DatabaseConfigService],
})
export class RootDatabaseModule {}
