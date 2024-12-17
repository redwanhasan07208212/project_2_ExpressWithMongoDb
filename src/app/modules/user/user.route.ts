import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { UserControllers } from './user.controller';
import { studentValidations } from '../student/student.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

export const userRoutes = router;
