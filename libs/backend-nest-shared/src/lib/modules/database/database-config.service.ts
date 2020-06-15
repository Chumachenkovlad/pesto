import { Injectable } from '@nestjs/common';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

import { ConfigKeys } from '../config/config.const';
import { ConfigService } from '../config/config.service';

@Injectable()
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'mysql',
      host: this.configService.get(ConfigKeys.DB_HOST),
      port: 3306,
      username: this.configService.get(ConfigKeys.DB_USERNAME),
      password: this.configService.get(ConfigKeys.DB_PASSWORD),
      database: this.configService.get(ConfigKeys.DB_DATABASE),
      autoLoadModels: true,
      synchronize: true,
    };
  }
}
