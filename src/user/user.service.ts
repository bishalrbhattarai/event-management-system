import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRepository } from './repositories/user.repository';
import { UserDocument } from './schemas/user.schema';
import { PasswordService } from './util-providers/password.provider';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
    const user: UserDocument | null = await this.userRepository.findByEmail(createUserDto.email);
    if (user) {
      throw new ConflictException('User with this email already exists');
    }
    const hashedPassword = await this.passwordService.hashPassword(createUserDto.password);

    return this.userRepository.createUser({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}
