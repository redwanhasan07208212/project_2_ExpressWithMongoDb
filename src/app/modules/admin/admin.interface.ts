import { Model, Types } from 'mongoose';

export type TAdminbloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';
export type TAdminGender = 'male' | 'female' | 'other';
export type TAdminName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type TFaculty = {
  id: string;
  user: Types.ObjectId;
  designation: string;
  name: TAdminName;
  gender: TAdminGender;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: TAdminbloodGroup;
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  isDeleted: boolean;
};

export interface AdminModel extends Model<TFaculty> {
  isUserExits(id: string): Promise<TFaculty | null>;
}
