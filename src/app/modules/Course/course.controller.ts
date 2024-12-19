import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CourseService } from './course.service';

const createCourse = catchAsync(async (req, res, next) => {
  const result = await CourseService.createCourseFromDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course is created succesfully',
    data: result,
  });
});
const getSingleCourse = catchAsync(async (req, res, next) => {
  const { id } = req?.params;
  const result = await CourseService.getSingleCourseFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is retrieved succesfully',
    data: result,
  });
});
const getAllCourse = catchAsync(async (req, res, next) => {
  const result = await CourseService.getAllCourseFromDb(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course are retrieved succesfully',
    data: result,
  });
});
const updateCourse = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await CourseService.updateCourseFromDb(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is updated succesfully',
    data: result,
  });
});
const assignCourseFaculties = catchAsync(async (req, res, next) => {
  const { courseId } = req.params;
  const { faculties } = req.body;
  const result = await CourseService.assignFacultiesWithCourseIntoDb(
    courseId,
    faculties,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is assigned succesfully',
    data: result,
  });
});
const removeCourseFaculties = catchAsync(async (req, res, next) => {
    const { courseId } = req.params;
    const { faculties } = req.body;
    const result = await CourseService.removeFacultiesFromCourseIntoDb(
      courseId,
      faculties,
    );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course is removed succesfully',
      data: result,
    });
  });
const deleteCourse = catchAsync(async (req, res, next) => {
  const { id } = req?.params;
  const result = await CourseService.deleteCourseFromDb(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is deleted succesfully',
    data: result,
  });
});
export const CourseController = {
  createCourse,
  getSingleCourse,
  getAllCourse,
  updateCourse,
  assignCourseFaculties,
  removeCourseFaculties,
  deleteCourse,
};
