import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { createAcademicSemesterService } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res, next) => {
  const result = createAcademicSemesterService.createAcademicSemesterIntodb(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester created Successfully',
    data: result,
  });
});

export const academicSemesterController = {
  createAcademicSemester,
};
