import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { AdminValidations } from '../admin/admin.validation';
import { FacultyValidations } from '../Faculty/faculty.validation';
import { studentValidations } from '../student/student.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);
router.post(
  '/create-faculty',
  validateRequest(FacultyValidations.createFacultyValidationSchema),
  UserControllers.createFaculty,
);
router.post(
  '/create-faculty',
  validateRequest(AdminValidations.createAdminValidationSchema),
  UserControllers.createFaculty,
);

export const userRoutes = router;
