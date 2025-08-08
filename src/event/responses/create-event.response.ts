import { ObjectType } from '@nestjs/graphql';
import { createResponse } from 'src/shared/responses/generic.response';
import { EventGraphQLType } from '../graphql-types/event-graphql.type';

@ObjectType()
export class CreateEventResponse extends createResponse(EventGraphQLType) {
  constructor(
    public readonly data: EventGraphQLType,
    public readonly message: string = "Event Created Successfully",
  ) {
    super();
  }
}
