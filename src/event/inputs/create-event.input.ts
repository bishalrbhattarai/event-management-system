import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEventInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  startDate: string;

  @Field()
  startTime: string;

  @Field()
  endDate: string;

  @Field()
  endTime: string;

  @Field()
  location: string;

  @Field()
  timeZone: string;
}
