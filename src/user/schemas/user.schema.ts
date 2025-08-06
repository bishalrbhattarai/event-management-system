import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { UserStatusEnum } from '../enums/user-status.enum';

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({
    type: String,
    enum: Object.values(UserStatusEnum),
    default: UserStatusEnum.ACTIVE,
  })
  isActive: UserStatusEnum;
}

export type UserDocument = User & Document & { _id: Types.ObjectId };
export const UserSchema = SchemaFactory.createForClass(User);
