import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validationRequest';
import { USER_ROLE } from '../user/user.constant';
import { academicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyController } from './acadmicFaculty.controller';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    academicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.createacademicFaculty,
);
router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.faculty),
  AcademicFacultyController.getAllFromAcademicFaculty,
);
router.get(
  '/:facultyId',
  AcademicFacultyController.getSingleFromAcademicFaculty,
);
router.patch('/:facultyId', AcademicFacultyController.updateAcademicFaculty);
export const academicFacultyRoute = router;
