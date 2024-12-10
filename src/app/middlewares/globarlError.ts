import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  
  let message = err?.message || 'Something went wrong!';
  res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
