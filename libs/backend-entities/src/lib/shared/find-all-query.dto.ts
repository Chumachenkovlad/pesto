import { ApiProperty } from '@nestjs/swagger';
import { IFindAllQuery } from '@pesto/public-interfaces';

import { PaginationDto } from './pagination.dto';
import { SortingDto } from './sorting.dto';

export class BaseFindAllQuery implements Partial<IFindAllQuery> {
  @ApiProperty({
    type: () => SortingDto,
  })
  sorting?: SortingDto;
  @ApiProperty({
    type: () => PaginationDto,
  })
  pagination?: PaginationDto;
  scope?: string;
  include?: string;
}
