import { IVote } from '@pesto/public-interfaces';
import { Column, ForeignKey, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';

import { Post } from './post.entity';
import { User } from './user.entity';

@Table({
  tableName: 'votes',
  timestamps: true,
  paranoid: true
})
export class Vote extends Model<Vote> implements IVote {
  @PrimaryKey
  @IsUUID(4)
  @Column
  id: string;

  @IsUUID(4)
  @ForeignKey(() => Post)
  @Column
  postId: string;

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column
  authorId: string;
}
