import httpStatus from 'http-status';
import mongoose from 'mongoose';
import QueryBuilder from '../../builder/queryBuilder';
import AppError from '../../errors/AppError';
import facultySearchFields from './faculty.constant';
import { TFaculty } from './faculty.interface';
import { Faculty } from './faculty.model';

const getAllFacultyFromDB = async (query: Record<string, unknown>) => {
  const facultyQuery = new QueryBuilder(
    Faculty.find().populate('academicDepartment'),
    query,
  )
    .search(facultySearchFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = facultyQuery.modelQuery;
  return result;
};

const getSingleFacultyFromDB = async (id: string) => {
  const result = await Faculty.findById(id);
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const deletedFaculty = await Faculty.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedFaculty) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Failed to delete Faculty member',
      );
    }

    const deletedUser = await Faculty.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }
    await session.commitTransaction();
    await session.endSession();
    return deletedFaculty;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const getupdateStudentFromDB = async (
  id: string,
  payload: Partial<TFaculty>,
) => {
  const { name, ...remainingStudentData } = payload;
  const modifiedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedData[`name.${key}`] = value;
    }
  }
  const result = await Faculty.findOneAndUpdate({ id }, modifiedData, {
    new: true,
  });
  return result;
};

export const facultyServices = {
  getAllFacultyFromDB,
  getSingleFacultyFromDB,
  deleteStudentFromDB,
  getupdateStudentFromDB,
};
