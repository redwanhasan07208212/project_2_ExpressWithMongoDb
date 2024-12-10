import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { Tuser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDb = async (password: string, payload: TStudent) => {
  // create a user object
  const user: Partial<Tuser> = {};

  user.password = password || (config.DATABASE_PASSWORD as string);

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  // set student role
  user.role = 'student';

  const session = await mongoose.startSession();
  try {
    // set manually generated id
    session.startTransaction();
    
    user.id = await generateStudentId(admissionSemester);

    // create a user (transaction-1)
    const newUser = await User.create([user], { session });

    // create a student object
    if (newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to Create User');
    }

    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // create a student (transaction-2)
    const newStudent = await Student.create([payload], { session });


    if (newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to Create User');
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const userServices = {
  createStudentIntoDb,
};
