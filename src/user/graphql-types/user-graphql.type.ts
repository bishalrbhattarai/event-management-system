import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserStatusEnum } from '../enums/user-status.enum';

@ObjectType()
export class UserGraphQLType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => UserStatusEnum)
  isActive: UserStatusEnum;
}
