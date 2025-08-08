import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/shared/database/database.module';
import { EventSchema } from './schemas/event.schema';
import { EventResolver } from './event.resolver';
import { EventService } from './event.service';
import { EventRepository } from './repositories/event.repository';

@Module({
  imports: [
    DatabaseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  providers: [EventResolver,EventService, EventRepository], 
})
export class EventModule {}
