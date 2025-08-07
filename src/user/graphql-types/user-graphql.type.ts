import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Expose } from 'class-transformer';
import { UserStatusEnum } from '../enums/user-status.enum';

registerEnumType(UserStatusEnum, {
  name: 'UserStatusEnum',
  description: 'The status of the user [ ACTIVE or INACTIVE ]',
});

@ObjectType()
export class UserGraphQLType {
  @Field(() => ID)
  @Expose()
  id: string;

  @Field()
  @Expose()
  name: string;

  @Field()
  @Expose()
  email: string;

  @Field(() => UserStatusEnum)
  @Expose()
  isActive: UserStatusEnum;
}
