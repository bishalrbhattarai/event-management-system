import { ObjectType } from '@nestjs/graphql';
import { createResponse } from 'src/shared/responses/generic.response';
import { UserGraphQLType } from '../graphql-types/user-graphql.type';

@ObjectType()
export class CreateUserResponse extends createResponse(UserGraphQLType) {
  constructor(
    public readonly data: UserGraphQLType,
    public readonly message: string ="User Created Sucessfully",
  ) {
    super();
  }
}
