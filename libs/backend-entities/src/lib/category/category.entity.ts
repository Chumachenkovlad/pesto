import { ICategory } from '@pesto/public-interfaces';
import { IsUUID4, Required } from '@pesto/shared';
import { BelongsToMany, Column, DefaultScope, Model, PrimaryKey, Table } from 'sequelize-typescript';

import { PostModel } from '../post/post.entity';
import { PostCategoryModel } from '../relations/post-category.entity';

@DefaultScope({
  attributes: ['id', 'name'],
})
@Table({
  tableName: 'categories',
})
export class CategoryModel extends Model<CategoryModel> implements ICategory {
  @PrimaryKey
  @IsUUID4
  @Column
  id: string;

  @Required
  @Column
  name: string;

  @BelongsToMany(() => PostModel, () => PostCategoryModel)
  posts: PostModel[];
}
