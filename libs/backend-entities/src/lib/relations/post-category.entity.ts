import { Column, ForeignKey, IsUUID, Model, Table } from 'sequelize-typescript';

import { CategoryModel } from '../category/category.entity';
import { PostModel } from '../post/post.entity';

@Table
export class PostCategoryModel extends Model<PostCategoryModel> {
  @ForeignKey(() => CategoryModel)
  @IsUUID(4)
  @Column
  categoryId: string;

  @ForeignKey(() => PostModel)
  @IsUUID(4)
  @Column
  postId: string;
}
