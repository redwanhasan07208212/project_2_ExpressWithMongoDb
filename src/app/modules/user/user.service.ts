import config from '../../config';
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
  // set manually generated id
  user.id = await generateStudentId(admissionSemester);
  //create a user
  const newUser = await User.create(user);

  // create a student object
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDb,
};
