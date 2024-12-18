import { TAdminbloodGroup, TAdminGender } from "./admin.interface";


export const Gender: TAdminGender[] = ['male', 'female', 'other'];

export const BloodGroup: TAdminbloodGroup[] = [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
];

export const adminSearchFields = [
  'email',
  'id',
  'contactNo',
  'emergencyContactNo',
  'name.firstName',
  'name.lastName',
  'name.middleName',
];
