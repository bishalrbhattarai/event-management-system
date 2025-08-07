import { Model } from 'mongoose';
import { User, UserDocument, UserSchema } from '../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { DatabaseRepository } from 'src/shared/database/database.repository';

@Injectable()
export class UserRepository extends DatabaseRepository<UserDocument> {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {
    super(userModel);
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async createUser(data: Partial<UserDocument>): Promise<UserDocument> {
    return this.userModel.create(data);
  }
}
