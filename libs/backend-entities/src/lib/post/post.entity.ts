import { ApiProperty } from '@nestjs/swagger';
import { IPost } from '@pesto/public-interfaces';
import { IsUUID4, Required } from '@pesto/shared';
import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    Default,
    DefaultScope,
    ForeignKey,
    HasMany,
    IsUrl,
    Model,
    PrimaryKey,
    Scopes,
    Table
} from 'sequelize-typescript';

import { CategoryModel } from '../category/category.entity';
import { CommentModel } from '../comment/comment.entity';
import { PostCategoryModel } from '../relations/post-category.entity';
import { UserModel } from '../user/user.entity';
import { VoteModel } from '../vote/vote.entity';

@DefaultScope({
  attributes: ['id', 'slug', 'title', 'imageUrl'],
  order: [['title', 'DESC']],
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
      'imageUrl',
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
  @Column({
    type: DataType.TEXT({ length: 'long' }),
  })
  body: string;

  @IsUrl
  @Column
  imageUrl: string;

  /* 
    TODO: Reserch when to update votesCount
  */
  votesCount: number;

  @Default(true)
  @Column
  visible: boolean;

  createdAt: string;

  updatedAt: string;

  @ForeignKey(() => UserModel)
  @Required
  @IsUUID4
  @Column
  authorId: string;

  @ApiProperty({ type: () => UserModel })
  @BelongsTo(() => UserModel)
  author: UserModel;

  @ApiProperty({ type: () => [CategoryModel] })
  @BelongsToMany(() => CategoryModel, () => PostCategoryModel)
  categories: CategoryModel[];

  @ApiProperty({ type: () => [VoteModel] })
  @HasMany(() => VoteModel)
  votes: VoteModel[];

  @HasMany(() => CommentModel)
  comments: CommentModel[];
}
