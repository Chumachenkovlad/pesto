import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@pesto/backend-nest-shared';

import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    VotesModule,
    CommentsModule,
    CategoriesModule,
    ConfigModule,
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
