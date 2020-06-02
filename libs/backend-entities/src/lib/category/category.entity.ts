import { ICategory } from '@pesto/public-interfaces';
import { AllowNull, Column, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'categories',
  timestamps: true,
  paranoid: true
})
export class Category extends Model<Category> implements ICategory {
  @PrimaryKey
  @IsUUID(4)
  @Column
  id: string;

  @AllowNull(false)
  @Column
  name: string;
}
