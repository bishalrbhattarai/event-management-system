import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {

    @Query(() => String)
    checkUser(): string {
        return 'User is valid';
    }


}
