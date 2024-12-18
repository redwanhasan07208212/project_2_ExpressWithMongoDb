import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";


const getSingleAdmin = catchAsync(async (req, res, next) => {
  const  id  = req.params.id;
  console.log(id);
  const result = await AdminServices.getSingleAdminFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is retrieved succesfully',
    data: result,
  });
});
const getAllAdmin = catchAsync(async (req, res, next) => {
  const result = await AdminServices.getAllAdminFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty are retrieved succesfully',
    data: result,
  });
});

const deleteAdmin = catchAsync(async (req, res, next) => {
  const { id } = req?.params;
  const result = await AdminServices.deleteAdminFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is deleted succesfully',
    data: result,
  });
});
const updateAdmin = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { admin } = req.body;
  const result = await AdminServices.getupdateAdminFromDB(id, admin);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is updated succesfully',
    data: result,
  });
});

export const adminController = {
  getSingleAdmin,
  getAllAdmin,
  deleteAdmin,
  updateAdmin,
};
