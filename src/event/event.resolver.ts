import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EventService } from './event.service';
import { CreateEventInput } from './inputs/create-event.input';
import { convertToGraphQLType } from 'src/shared/mappers/graphql.mapper';
import { EventGraphQLType } from './graphql-types/event-graphql.type';
import { EventListGraphQLType } from './graphql-types/event-list-graphql.type';
import { CreateEventResponse } from './responses/create-event.response';

@Resolver()
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => String)
  checkEvent(): string {
    return 'Event is valid';
  }

  @Query(() => [EventListGraphQLType])
  async getEvents(@Args('timeZone') timeZone: string): Promise<EventListGraphQLType[]> {
    return await this.eventService.getEventsForTimezone(timeZone);
  }

  @Mutation(() => CreateEventResponse)
  async createEvent(@Args('input') createEvent: CreateEventInput) {
    const createdEvent = await this.eventService.createEvent(createEvent);
    return new CreateEventResponse(
      convertToGraphQLType(createdEvent, EventGraphQLType),
      "Event Created Successfully"
    );
  }
}
