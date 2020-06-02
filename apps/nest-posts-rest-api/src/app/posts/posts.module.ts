import { Module } from '@nestjs/common';
import { PostsModelModule } from '@pesto/backend-nest-shared';

import { PostsController } from './posts.controller';


@Module({
  imports: [PostsModelModule],
  controllers: [PostsController]
})
export class PostsModule {}

