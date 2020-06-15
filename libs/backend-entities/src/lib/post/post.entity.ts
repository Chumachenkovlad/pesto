import { IPost } from '@pesto/public-interfaces';
import { IsUUID4, Required } from '@pesto/shared';
import {
    BelongsTo,
    BelongsToMany,
    Column,
    CreatedAt,
    Default,
    DefaultScope,
    ForeignKey,
    HasMany,
    IsUrl,
    Model,
    PrimaryKey,
    Scopes,
    Table,
    UpdatedAt
} from 'sequelize-typescript';

import { CategoryModel } from '../category/category.entity';
import { CommentModel } from '../comment/comment.entity';
import { PostCategoryModel } from '../relations/post-category.entity';
import { UserModel } from '../user/user.entity';
import { VoteModel } from '../vote/vote.entity';

@DefaultScope({
  attributes: ['id', 'slug', 'title', 'avatarUrl'],
  order: ['title', 'DESC'],
  where: {
    visible: true,
  },
})
@Scopes({
  full: {
    attributes: [
      'id',
      'slug',
      'title',
      'avatarUrl',
      'comments',
      'author',
      'cagories',
    ],
    include: [
      () => CommentModel,
      () => UserModel,
      () => CategoryModel,
      () => VoteModel,
    ],
  },
})
@Table({
  tableName: 'posts',
  timestamps: true,
  paranoid: true,
})
export class PostModel extends Model<PostModel> implements IPost {
  @PrimaryKey
  @IsUUID4
  @Column
  id: string;

  @Required
  @Column
  slug: string;

  @Required
  @Column
  title: string;

  @Required
  @Column
  body: string;

  @Default('')
  @IsUrl
  @Column
  imageUrl: string;

  /* 
    TODO: Reserch when to update votesCount
  */
  votesCount: number;

  @Default(false)
  @Column
  visible: boolean;

  @Column
  @CreatedAt
  createdAt: string;

  @Column
  @UpdatedAt
  updatedAt: string;

  @ForeignKey(() => UserModel)
  @Required
  @IsUUID4
  @Column
  authorId: string;

  @BelongsTo(() => UserModel)
  author: UserModel;

  @BelongsToMany(() => CategoryModel, () => PostCategoryModel)
  categories: CategoryModel[];

  @HasMany(() => VoteModel)
  votes: VoteModel[];

  @HasMany(() => CommentModel)
  comments: CommentModel[];
}
