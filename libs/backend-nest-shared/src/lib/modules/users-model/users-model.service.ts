import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User, UserDto, UserFilter } from '@pesto/backend-entities';
import { Sequelize } from 'sequelize-typescript';

import { BaseEntityService } from '../../base/base-entity.service';

@Injectable()
export class UsersModelService extends BaseEntityService<User, UserDto, UserFilter> {
  protected findAllEntityAttributes = ['id', 'firstName', 'lastName', 'avatarUrl'];
  constructor(
    @InjectModel(User)
    model: typeof User,
    sequelize: Sequelize
  ) {
    super(model, sequelize);
  }

  async findByEmail(email: string): Promise<User> {
    return this.model.findOne<User>({ where: { email } });
  }
}
