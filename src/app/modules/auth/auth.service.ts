import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TloginUser } from './auth.interface';
const loginUser = async (payload: TloginUser) => {
  const user = await User.isUserExitsByCustomId(payload.id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found');
  }

  const isUserDeleted = user?.isDeleted;
  if (isUserDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is deleted');
  }
  const isUserBlocked = user?.status;
  if (isUserBlocked === 'blocked') {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is blocked');
  }

  const isPasswordMatched = await User.isPasswordMatched(
    payload?.password,
    user?.password,
  );
  console.log(isPasswordMatched);

  const jwtPayload = {
    userId: user,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.JWT_ACCESS_SECRET as string, {
    expiresIn: '10d',
  });
  return {
    accessToken,
    needsPasswordChange: user?.needPasswordChange,
  };
};

export const AuthServices = {
  loginUser,
};
