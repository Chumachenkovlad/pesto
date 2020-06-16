import { ApiProperty } from '@nestjs/swagger';
import { ICommentMessage } from '@pesto/public-interfaces';
import { IsUUID4, Required } from '@pesto/shared';
import {
    BelongsTo,
    Column,
    Default,
    DefaultScope,
    ForeignKey,
    Model,
    PrimaryKey,
    Scopes,
    Table
} from 'sequelize-typescript';

import { PostModel } from '../post/post.entity';
import { UserModel } from '../user/user.entity';

@DefaultScope({
  attributes: ['id', 'body', 'createdAt', 'updatedAt'],
  order: [['createAt', 'DESC']],
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

  createdAt: string;

  updatedAt: string;

  @ApiProperty({ type: () => [PostModel] })
  @BelongsTo(() => PostModel)
  post: PostModel;

  @ApiProperty({ type: () => [UserModel] })
  @BelongsTo(() => UserModel, 'authorId')
  author: UserModel;
}
