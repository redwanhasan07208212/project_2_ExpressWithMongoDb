import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartintoDb = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};
const getAllAcademicDepartmentintoDb = async () => {
  const result = await AcademicDepartment.find();
  return result;
};
const getSingleAcademicDepartmentintoDb = async (id: string) => {
  const result = await AcademicDepartment.findById(id);
  return result;
};
const updateAcademicDepartmentintoDb = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true, runValidators: true },
  );
  return result;
};
export const AcademicDepartmentService = {
  createAcademicDepartintoDb,
  getAllAcademicDepartmentintoDb,
  getSingleAcademicDepartmentintoDb,
  updateAcademicDepartmentintoDb,
};
