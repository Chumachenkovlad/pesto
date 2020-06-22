import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto, UserFilter, UserModel } from '@pesto/backend-entities';
import { Sequelize } from 'sequelize-typescript';

import { BaseEntityService } from '../../base/base-entity.service';

@Injectable()
export class UsersModelService extends BaseEntityService<
  UserModel,
  UserDto,
  UserFilter
> {
  constructor(
    @InjectModel(UserModel)
    model: typeof UserModel,
    sequelize: Sequelize
  ) {
    super(model, sequelize);
  }

  async findByEmail(email: string): Promise<UserModel> {
    return this.model.scope('auth').findOne<UserModel>({ where: { email } });
  }
}
