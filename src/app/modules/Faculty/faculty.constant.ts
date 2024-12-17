import { TbloodGroup, TFacultyGender } from './faculty.interface';

export const Gender: TFacultyGender[] = ['male', 'female', 'other'];

export const BloodGroup: TbloodGroup[] = [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
];

export const facultySearchFields = [
  'email',
  'id',
  'contactNo',
  'emergencyContactNo',
  'name.firstName',
  'name.lastName',
  'name.middleName',
];
