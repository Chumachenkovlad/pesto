import { Controller } from '@nestjs/common';
import { CategoryDto, CategoryFilter, CategoryModel } from '@pesto/backend-entities';
import { BaseEntityController, CategoryModelService } from '@pesto/backend-nest-shared';


@Controller('categories')
export class CategoriesController extends BaseEntityController<CategoryModel, CategoryDto, CategoryFilter> {
  constructor(protected readonly entityService: CategoryModelService) {
    super(entityService);
  }
}
