import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CourseService } from './course.service';

const createCourse = catchAsync(async (req, res, next) => {
  const result = await CourseService.createCourseFromDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Faculty is retrieved succesfully',
    data: result,
  });
});
const getSingleCourse = catchAsync(async (req, res, next) => {
  const { id } = req?.params;
  const result = await CourseService.getSingleCourseFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is retrieved succesfully',
    data: result,
  });
});
const getAllCourse = catchAsync(async (req, res, next) => {
  const result = await CourseService.getAllCourseFromDb(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty are retrieved succesfully',
    data: result,
  });
});

const deleteCourse = catchAsync(async (req, res, next) => {
  const { id } = req?.params;
  const result = await CourseService.deleteCourseFromDb(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is deleted succesfully',
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getSingleCourse,
  getAllCourse,
  deleteCourse,
};
