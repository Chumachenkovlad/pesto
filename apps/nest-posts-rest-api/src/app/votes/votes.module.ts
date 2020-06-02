import { Module } from '@nestjs/common';
import { VotesModelModule } from '@pesto/backend-nest-shared';

import { VotesController } from './comments.controller';

@Module({
  imports: [VotesModelModule],
  controllers: [VotesController]
})
export class VotesModule {}
