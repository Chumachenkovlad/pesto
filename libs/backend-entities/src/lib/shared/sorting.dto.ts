import { ApiProperty } from '@nestjs/swagger';
import { ISorting } from '@pesto/public-interfaces';

enum SortingDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class SortingDto implements ISorting {
  @ApiProperty({
    description: 'Sorting property',
  })
  prop: string;
  @ApiProperty({
    enum: SortingDirection,
    enumName: 'SortingDirection',
  })
  direction: 'ASC' | 'DESC';
}
