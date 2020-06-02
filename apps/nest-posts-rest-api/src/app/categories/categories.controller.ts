import { Controller } from '@nestjs/common';
import { Category, CategoryDto, CategoryFilter } from '@pesto/backend-entities';
import { BaseEntityController, CategoryModelService } from '@pesto/backend-nest-shared';


@Controller('categories')
export class CategoriesController extends BaseEntityController<Category, CategoryDto, CategoryFilter> {
  constructor(protected readonly entityService: CategoryModelService) {
    super(entityService);
  }
}
