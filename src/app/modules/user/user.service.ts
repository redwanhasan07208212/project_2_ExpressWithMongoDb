import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { Tuser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDb = async (password: string, student: TStudent) => {
  // create a user object
  const user: Partial<Tuser> = {};

  user.password = password || (config.DATABASE_PASSWORD as string);

  // set student role
  user.role = 'student';
  // set manually generated id
  user.id = '20301000001';
  //create a user
  const newUser = await User.create(user);

  // create a student object
  if (Object.keys(newUser).length) {
    student.id = newUser.id;
    student.user = newUser._id;

    const newStudent = await Student.create(student);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDb,
};
