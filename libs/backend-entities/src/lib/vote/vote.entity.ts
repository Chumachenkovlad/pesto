import { IVote } from '@pesto/public-interfaces';
import { IsUUID4, Required } from '@pesto/shared';
import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';

import { PostModel } from '../post/post.entity';
import { UserModel } from '../user/user.entity';

@Table({ tableName: 'votes' })
export class VoteModel extends Model<VoteModel> implements IVote {
  @IsUUID4
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => PostModel)
  @IsUUID4
  @Required
  @Column
  postId: string;

  @ForeignKey(() => UserModel)
  @IsUUID4
  @Required
  @Column
  authorId: string;

  @BelongsTo(() => UserModel)
  author: UserModel;

  @BelongsTo(() => PostModel)
  post: PostModel;
}
