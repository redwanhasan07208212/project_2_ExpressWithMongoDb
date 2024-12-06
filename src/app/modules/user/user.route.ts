import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { studentValidationCreateSchema } from '../student/student.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidationCreateSchema),
  UserControllers.createStudent,
);

export const userRoutes = router;
