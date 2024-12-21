import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';
import { TUserRole } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';
import catchAsync from '../utils/catchAsync';
const auth = (...requiredRoles: TUserRole[]) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    //console.log(token);

    // check if the token was sent from the client
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not Authorized');
    }

    const decoded = jwt.verify(
      token,
      config.JWT_ACCESS_SECRET as string,
    ) as JwtPayload;

    const { role, userId, iat } = decoded;
    const user = await User.isUserExitsByCustomId(userId);
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
    // invalid token

    // decoded undefined
    //console.log(decoded);

    if (
      user.passwordChangeAt &&
      User.isJWTIssuedBeforePasswordChange(user.passwordChangeAt, iat as number)
    ) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not Authorized');
    }
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not Authorized');
    }
    req.user = decoded as JwtPayload;
    next();
  });
export default auth;
