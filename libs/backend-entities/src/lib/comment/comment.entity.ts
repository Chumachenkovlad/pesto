import { IComment } from '@pesto/public-interfaces';
import { Column, CreatedAt, ForeignKey, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

import { User } from '../user/user.entity';

@Table({
  tableName: 'comments',
  timestamps: true,
  paranoid: true
})
export class Comment extends Model<Comment> implements IComment {
  @PrimaryKey
  @IsUUID(4)
  @Column
  id: string;

  @Column
  body: string;

  @IsUUID(4)
  @Column
  postId: string;

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column
  authorId: string;

  @CreatedAt
  createdAt: string;

  @UpdatedAt
  updatedAt: string;
}
