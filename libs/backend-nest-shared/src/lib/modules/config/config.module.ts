import { Global, Module } from '@nestjs/common';

import { ConfigService } from './config.service';

const DOTENV_PATH = '.env';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(DOTENV_PATH)
    }
  ],
  exports: [ConfigService]
})
export class ConfigModule {}
