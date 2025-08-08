import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Expose } from 'class-transformer';

@ObjectType()
export class EventGraphQLType {
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
  startDate: Date;

  @Field()
  @Expose()
  endDate: Date;

  @Field()
  @Expose()
  timeZone: string;

  @Field()
  @Expose()
  location: string;

  @Field()
  @Expose()
  createdAt: Date;

  @Field()
  @Expose()
  updatedAt: Date;
}
