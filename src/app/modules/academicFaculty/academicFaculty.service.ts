import { TacademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyintoDb = async (payload: TacademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};
const getAllAcademicFacultyintoDb = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
const getSingleAcademicFacultyintoDb = async (facultyId: string) => {
  const result = await AcademicFaculty.findById(facultyId);
};
const updateAcademicFacultyintoDb = async (
  id: string,
  payload: Partial<TacademicFaculty>,
) => {
  const result = AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const AcademicFacultyServices = {
  createAcademicFacultyintoDb,
  getAllAcademicFacultyintoDb,
  getSingleAcademicFacultyintoDb,
  updateAcademicFacultyintoDb,
};
