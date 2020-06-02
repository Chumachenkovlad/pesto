import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

import { ConfigKeys } from './config.const';

export class ConfigService implements SequelizeOptionsFactory {
  private readonly envConfig: { [key: string]: string };

  constructor(private filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(this.filePath));
  }

  get(key: string): string {
    const config = this.envConfig[key];

    if (config === undefined) {
      throw new Error(
        `Check config file (${this.filePath}). Configuration '${key}' couldn't be found`
      );
    }

    return this.envConfig[key];
  }

  get jwtSecret(): string {
    return this.get(ConfigKeys.JWT_SECRET);
  }

  get tokenExpirationTime(): number {
    return Number(this.get(ConfigKeys.TOKEN_EXPIRATION_TIME));
  }

  get defaultLimit(): number {
    return Number(this.get(ConfigKeys.DEFAULT_LIMIT));
  }

  get isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
  }

  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'mysql',
      host: this.get(ConfigKeys.DB_HOST),
      port: 3306,
      username: this.get(ConfigKeys.DB_USERNAME),
      password: this.get(ConfigKeys.DB_PASSWORD),
      database: this.get(ConfigKeys.DB_DATABASE),
      autoLoadModels: true,
      synchronize: true,
      //models: [User, Post, Comment, Vote, Category]
    };
  }
}
