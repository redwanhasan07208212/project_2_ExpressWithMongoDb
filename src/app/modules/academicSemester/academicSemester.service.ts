import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntodb = async (payload: TAcademicSemester) => {
  const createAcademicSemester = await AcademicSemester.create(payload);
  return createAcademicSemester;
};
export const createAcademicSemesterService = {
  createAcademicSemesterIntodb,
};
