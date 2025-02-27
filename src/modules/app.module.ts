import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from '../configs/configs';
import { AuthModule } from './auth/auth.module';
import { PostgresModule } from './postgres/postgres.module';
import { RedisModule } from './redis/redis.module';
import { RepositoryModule } from './repository/repository.module';
import { UserService } from './user/services/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    RedisModule,
    PostgresModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    RepositoryModule,
  ],
  controllers: [],
  providers: [ConfigService, UserService],
})
export class AppModule {}
