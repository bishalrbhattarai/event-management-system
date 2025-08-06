import { UserStatusEnum } from '../enums/user-status.enum';

export class IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  isActive: UserStatusEnum;
}
