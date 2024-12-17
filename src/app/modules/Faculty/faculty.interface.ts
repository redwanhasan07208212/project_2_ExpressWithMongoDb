import { Model, Types } from 'mongoose';

export type TbloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';
export type TFacultyGender = 'male' | 'female' | 'other';
export type TFacultyName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type TFaculty = {
  id: string;
  user: Types.ObjectId;
  designation: string;
  name: TFacultyName;
  gender: TFacultyGender;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: TbloodGroup;
  presentAddress: string;
  permanentAddress: string;
  profileImg: string;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};

export interface FacultyModel extends Model<TFaculty> {
  isUserExits(id: string): Promise<TFaculty | null>;
}
