import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Expose } from 'class-transformer';

@ObjectType()
export class EventListGraphQLType {
  @Field(() => ID)
  @Expose()
  id: string;

  @Field()
  @Expose()
  title: string;

  @Field()
  @Expose()
  description: string;

  @Field()
  @Expose()
  startDate: string; // Formatted as DD/MM/YY

  @Field()
  @Expose()
  startTime: string; // Formatted as HH:mmam/pm

  @Field()
  @Expose()
  endDate: string; // Formatted as DD/MM/YY

  @Field()
  @Expose()
  endTime: string; // Formatted as HH:mmam/pm

  @Field()
  @Expose()
  location: string;

  @Field()
  @Expose()
  timeZone: string;
}
