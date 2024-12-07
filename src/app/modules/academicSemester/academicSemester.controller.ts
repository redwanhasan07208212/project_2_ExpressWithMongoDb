import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await AcademicSemesterService.createAcademicSemesterIntodb(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester created Successfully',
    data: result,
  });
});
const getallAcademicSemester = catchAsync(async (req, res, next) => {
  const result =await AcademicSemesterService.getAllAcademicSemesterIntodb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Semester retrived Successfully',
    data: result,
  });
});
const getSingleAcademicSemester = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result =await
    AcademicSemesterService.getSingleAcademicSemesterIntodb(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Semester retrived Successfully',
    data: result,
  });
});
const updateAcademicSemester = catchAsync(async (req, res, next) => {
  const { semesterId } = req.params;
  const result =await AcademicSemesterService.updateAcademicSemesterIntodb(
    semesterId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Updated Successfully',
    data: result,
  });
});
export const academicSemesterController = {
  createAcademicSemester,
  getallAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
