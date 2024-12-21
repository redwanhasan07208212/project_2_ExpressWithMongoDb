import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface Tuser {
  id: string;
  password: string;
  passwordChangeAt: Date;
  needPasswordChange: boolean;
  role: 'admin' | 'faculty' | 'student';
  status: 'inprogess' | 'blocked';
  isDeleted: boolean;
}

export interface UserModel extends Model<Tuser> {
  isUserExitsByCustomId(id: string): Promise<Tuser>;
  isPasswordMatched(
    plainTextPassword: string,
    hasedPassword: string,
  ): Promise<boolean>;

  isJWTIssuedBeforePasswordChange(
    passwordChangedTimeStamps: Date,
    jwtIssuedTimeStamps: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
