import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { QueueModule } from './queue/queue.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [GraphqlModule, SharedModule, UserModule, QueueModule,EventModule],
})
export class AppModule {}
