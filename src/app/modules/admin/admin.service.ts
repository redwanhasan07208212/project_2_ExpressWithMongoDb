import mongoose from "mongoose";
import QueryBuilder from "../../builder/queryBuilder";
import { adminSearchFields } from "./admin.constant";
import { Admin } from "./admin.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { TAdmin } from "./admin.interface";


const getAllAdminFromDB = async (query: Record<string, unknown>) => {
  const adminQuery = new QueryBuilder(
    Admin.find(),
    query,
  )
    .search(adminSearchFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = adminQuery.modelQuery;
  return result;
};

const getSingleAdminFromDB = async (id: string) => {
  const result = await Admin.findById(id);
  return result;
};
const deleteAdminFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const deletedAdmin = await Admin.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedAdmin) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Failed to delete Admin member',
      );
    }

    const deletedUser = await Admin.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }
    await session.commitTransaction();
    await session.endSession();
    return deletedAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const getupdateAdminFromDB = async (
  id: string,
  payload: Partial<TAdmin>,
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
  const result = await Admin.findOneAndUpdate({ id }, modifiedData, {
    new: true,
  });
  return result;
};

export const AdminServices = {
  getAllAdminFromDB,
  getSingleAdminFromDB,
  deleteAdminFromDB,
  getupdateAdminFromDB,
};
