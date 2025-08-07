import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserRepository } from './repositories/user.repository';
import { DatabaseModule } from 'src/shared/database/database.module';
import { User, UserSchema } from './schemas/user.schema';
import { PasswordService } from './util-providers/password.provider';

@Module({
  imports: [DatabaseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UserResolver, UserService, UserRepository, PasswordService],
  exports: [UserService],
})
export class UserModule {}
