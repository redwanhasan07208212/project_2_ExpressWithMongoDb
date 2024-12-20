import { Model } from 'mongoose';

export interface Tuser {
  id: string;
  password: string;
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
}
