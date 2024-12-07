import { academicSemesterCodeNameMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntodb = async (payload: TAcademicSemester) => {
  if (academicSemesterCodeNameMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  const createAcademicSemester = await AcademicSemester.create(payload);
  console.log(createAcademicSemester);
  return createAcademicSemester;
};
const getAllAcademicSemesterIntodb = async () => {
  const result = await AcademicSemester.find();
  return result;
};
const getSingleAcademicSemesterIntodb = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};
const updateAcademicSemesterIntodb = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterCodeNameMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const AcademicSemesterService = {
  createAcademicSemesterIntodb,
  getAllAcademicSemesterIntodb,
  getSingleAcademicSemesterIntodb,
  updateAcademicSemesterIntodb,
};
