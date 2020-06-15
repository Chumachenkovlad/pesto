import { Controller } from '@nestjs/common';
import { UserDto, UserFilter, UserModel } from '@pesto/backend-entities';
import { BaseEntityController, UsersModelService } from '@pesto/backend-nest-shared';


@Controller('users')
export class UsersController extends BaseEntityController<UserModel, UserDto, UserFilter> {
  constructor(protected readonly entityService: UsersModelService) {
    super(entityService);
  }
}
