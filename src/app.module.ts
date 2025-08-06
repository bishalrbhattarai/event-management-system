import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GraphqlModule, SharedModule, UserModule],
})
export class AppModule {}
