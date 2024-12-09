import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicFacultyServices } from './academicFaculty.service';

const createacademicFaculty = catchAsync(async (req, res, next) => {
  const result = await AcademicFacultyServices.createAcademicFacultyintoDb(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty Created Successfully',
    data: result,
  });
});
const getAllFromAcademicFaculty = catchAsync(async (req, res, next) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultyintoDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get All Academic Faculty Successfully',
    data: result,
  });
});
const getSingleFromAcademicFaculty = catchAsync(async (req, res, next) => {
  const { facultyId } = req.params;
  const result =
    await AcademicFacultyServices.getSingleAcademicFacultyintoDb(facultyId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Single Academic Faculty Successfully',
    data: result,
  });
});
const updateAcademicFaculty = catchAsync(async (req, res, next) => {
  const { facultyId } = req.params;
  const result = await AcademicFacultyServices.updateAcademicFacultyintoDb(
    facultyId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty Created Successfully',
    data: result,
  });
});
export const AcademicFacultyController = {
  createacademicFaculty,
  getAllFromAcademicFaculty,
  getSingleFromAcademicFaculty,
  updateAcademicFaculty,
};
