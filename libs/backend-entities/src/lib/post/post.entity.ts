import { IPost } from '@pesto/public-interfaces';
import {
    AllowNull,
    BelongsTo,
    Column,
    CreatedAt,
    ForeignKey,
    IsUrl,
    IsUUID,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt
} from 'sequelize-typescript';

import { Category } from '../category/category.entity';
import { User } from '../user/user.entity';

@Table({
  tableName: 'posts',
  timestamps: true,
  paranoid: true
})
export class Post extends Model<Post> implements IPost {
  @PrimaryKey
  @IsUUID(4)
  @Column
  id: string;

  @AllowNull(false)
  @IsUUID(4)
  @ForeignKey(() => User)
  @Column
  authorId: string;

  @AllowNull(false)
  @Column
  slug: string;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  body: string;

  @AllowNull(true)
  @IsUrl
  @Column
  imageUrl: string;

  votesCount: number;

  @Column
  visible: boolean;

  @Column
  @CreatedAt
  createdAt: string;

  @Column
  @UpdatedAt
  updatedAt: string;

  @ForeignKey(() => Category)
  categoryId: string;

  @BelongsTo(() => Category)
  categories: Category[];
}
