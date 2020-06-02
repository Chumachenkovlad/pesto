import { Controller } from '@nestjs/common';
import { User, UserDto, UserFilter } from '@pesto/backend-entities';
import { BaseEntityController, UsersModelService } from '@pesto/backend-nest-shared';


@Controller('users')
export class UsersController extends BaseEntityController<User, UserDto, UserFilter> {
  constructor(protected readonly entityService: UsersModelService) {
    super(entityService);
  }
}
