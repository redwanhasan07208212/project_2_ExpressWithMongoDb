import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
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
router.get('/', AcademicFacultyController.getAllFromAcademicFaculty);
router.get(
  '/:facultyId',
  AcademicFacultyController.getSingleFromAcademicFaculty,
);
router.patch('/:facultyId', AcademicFacultyController.updateAcademicFaculty);
export const academicFacultyRoute = router;
