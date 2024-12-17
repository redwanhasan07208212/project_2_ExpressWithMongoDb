import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { facultyServices } from './faculty.service';

const getSingleFaculty = catchAsync(async (req, res, next) => {
  const { facultyId } = req.params;
  const result = await facultyServices.getSingleFacultyFromDB(facultyId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is retrieved succesfully',
    data: result,
  });
});
const getAllFaculty = catchAsync(async (req, res, next) => {
  const result = await facultyServices.getAllFacultyFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty are retrieved succesfully',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req, res, next) => {
  const { facultytId } = req.params;
  const result = await facultyServices.deleteFacultyFromDB(facultytId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is deleted succesfully',
    data: result,
  });
});
const updateFaculty = catchAsync(async (req, res, next) => {
  const { facultyId } = req.params;
  const { faculty } = req.body;
  const result = await facultyServices.getupdateFacultyFromDB(
    facultyId,
    faculty,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is updated succesfully',
    data: result,
  });
});

export const facultyController = {
  getSingleFaculty,
  getAllFaculty,
  deleteFaculty,
  updateFaculty,
};
