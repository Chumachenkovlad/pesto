import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryDto, CategoryFilter, CategoryModel } from '@pesto/backend-entities';
import { BaseEntityController, CategoryModelService } from '@pesto/backend-nest-shared';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController extends BaseEntityController<
  CategoryModel,
  CategoryDto,
  CategoryFilter
>(CategoryModel, CategoryDto, CategoryFilter) {
  constructor(protected readonly entityService: CategoryModelService) {
    super(entityService);
  }
}
