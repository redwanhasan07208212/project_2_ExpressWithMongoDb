import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TloginUser } from './auth.interface';
const loginUser = async (payload: TloginUser) => {
  console.log(payload);
  const isUserExists = await User.findOne({ id: payload?.id });
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found');
  }

  const isUserDeleted = isUserExists?.isDeleted;
  if (isUserDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is deleted');
  }
  const isUserBlocked = isUserExists?.status;
  if (isUserBlocked === 'blocked') {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is blocked');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExists?.password,
  );
  console.log(isPasswordMatched)
  return {};
};

export const AuthServices = {
  loginUser,
};
