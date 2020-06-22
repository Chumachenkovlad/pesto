import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto, UserFilter, UserModel } from '@pesto/backend-entities';
import { BaseEntityController, UsersModelService } from '@pesto/backend-nest-shared';

@ApiTags('Users')
@Controller('users')
export class UsersController extends BaseEntityController<
  UserModel,
  UserDto,
  UserFilter
>(UserModel, UserDto, UserFilter) {
  constructor(protected readonly entityService: UsersModelService) {
    super(entityService);
  }
}
