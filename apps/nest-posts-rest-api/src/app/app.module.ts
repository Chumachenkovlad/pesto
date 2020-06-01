import { Module } from '@nestjs/common';

import {
  CategoryModelModule
} from './../../../../libs/backend-nest-shared/src/lib/models/category-model/category-model.module';
import {
  CommentsModelModule
} from './../../../../libs/backend-nest-shared/src/lib/models/comments-model/comments-model.module';
import { PostsModelModule } from './../../../../libs/backend-nest-shared/src/lib/models/posts-model/posts-model.module';
import { UsersModelModule } from './../../../../libs/backend-nest-shared/src/lib/models/users-model/users-model.module';
import { VotesModelModule } from './../../../../libs/backend-nest-shared/src/lib/models/votes-model/votes-model.module';
import { UsersModelModule } from './../../../../libs/backend-nest-shared/src/lib/users-model.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
        VotesModelModule,
        UsersModelModule,
        PostsModelModule,
        CommentsModelModule,
        CategoryModelModule,
        UsersModelModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
