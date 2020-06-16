import { IPaginationDto } from '@pesto/public-interfaces';

export class PaginationDto implements Partial<IPaginationDto> {
  offset: number;
  limit: number;
}
