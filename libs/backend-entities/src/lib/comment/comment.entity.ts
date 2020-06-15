import { ICommentMessage } from '@pesto/public-interfaces';
import { IsUUID4, Required } from '@pesto/shared';
import {
    BelongsTo,
    Column,
    CreatedAt,
    Default,
    DefaultScope,
    ForeignKey,
    Model,
    PrimaryKey,
    Scopes,
    Table,
    UpdatedAt
} from 'sequelize-typescript';

import { PostModel } from '../post/post.entity';
import { UserModel } from '../user/user.entity';

@DefaultScope({
  attributes: ['id', 'body', 'createdAt', 'updatedAt'],
})
@Scopes({
  full: {
    attributes: ['id', 'body', 'createdAt', 'updatedAt', 'post', 'author'],
    include: [() => PostModel, () => UserModel],
  },
})
@Table({
  tableName: 'comments',
  timestamps: true,
  paranoid: true,
})
export class CommentModel extends Model<CommentModel>
  implements ICommentMessage {
  @PrimaryKey
  @IsUUID4
  @Column
  id: string;

  @Required
  @Default('')
  @Column
  body: string;

  @ForeignKey(() => PostModel)
  @Required
  @IsUUID4
  @Column
  postId: string;

  @ForeignKey(() => UserModel)
  @Required
  @IsUUID4
  @Column
  authorId: string;

  @CreatedAt
  @Column
  createdAt: string;

  @UpdatedAt
  @Column
  updatedAt: string;

  @BelongsTo(() => PostModel)
  post: PostModel;

  @BelongsTo(() => UserModel, 'authorId')
  author: UserModel;
}
