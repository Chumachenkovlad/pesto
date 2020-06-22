import { Module } from '@nestjs/common';
import { AuthModule, ConfigModule, RootDatabaseModule } from '@pesto/backend-nest-shared';

import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    UsersModule,
    CategoriesModule,
    PostsModule,
    VotesModule,
    CommentsModule,
    ConfigModule,
    RootDatabaseModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
