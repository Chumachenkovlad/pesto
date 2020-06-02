import { Module } from '@nestjs/common';
import { CommentsModelModule } from '@pesto/backend-nest-shared';

import { CommentsController } from './comments.controller';


@Module({
  imports: [CommentsModelModule],
  controllers: [CommentsController]
})
export class CommentsModule {}
