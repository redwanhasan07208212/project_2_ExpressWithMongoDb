import { Schema, model } from 'mongoose';
import {
  Gurdian,
  LocalGurdian,
  Student,
  UserName,
} from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});
const gurdianSchema = new Schema<Gurdian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: String,
  fatherContactNumber: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: String,
  motherContactNumber: {
    type: String,
    required: true,
  },
});

const localGurdianSchema = new Schema<LocalGurdian>({
  name: {
    type: String,
    required: true,
  },
  occupation: String,
  contactNumber: {
    type: String,
    required: true,
  },
  address: String,
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  dateofBirth: String,
  emergencyContactNumber: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImg: String,
  isActive: {
    type: String,
    enum: ['active', 'disabled'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
