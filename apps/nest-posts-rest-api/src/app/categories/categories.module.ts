import { Module } from '@nestjs/common';
import { CategoryModelModule } from '@pesto/backend-nest-shared';

import { CategoriesController } from './categories.controller';

@Module({
  imports: [CategoryModelModule],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
