import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';

export const createResponse = <T>(classRef: Type<T>) => {
  @ObjectType({ isAbstract: true })
  abstract class GenericResponse {
    @Field(() => String)
    message: string;

    @Field(() => classRef)
    data: T;
  }
  return GenericResponse;
};
