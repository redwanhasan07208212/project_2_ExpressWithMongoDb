import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const notFound = (res: Response, req: Request, next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Api not found',
    error: '',
  });
};

export default notFound;
