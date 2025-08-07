import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './inputs/create-user.input';
import { UserDocument } from './schemas/user.schema';
import { convertToGraphQLType } from 'src/shared/mappers/graphql.mapper';
import { UserGraphQLType } from './graphql-types/user-graphql.type';
import { CreateUserResponse } from './responses/create-user.response';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  checkUser(): string {
    return 'User is valid';
  }

  @Mutation(() => CreateUserResponse)
  async createUser(@Args('input') createUser: CreateUserInput): Promise<CreateUserResponse> {
    const createdUser: UserDocument = await this.userService.createUser(createUser);
    const userGraphQLType = convertToGraphQLType(createdUser, UserGraphQLType);
    return new CreateUserResponse(userGraphQLType);
  }
}
