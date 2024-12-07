import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { academicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();
router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidation.createacademicSemesterValidation),
  academicSemesterController.createAcademicSemester,
);
router.get('/', academicSemesterController.getallAcademicSemester);
router.get(
  '/:semesterId',
  academicSemesterController.getSingleAcademicSemester,
);
router.patch(
  '/:semesterId',
  validateRequest(AcademicSemesterValidation.updateacademicSemesterValidation),
  academicSemesterController.updateAcademicSemester,
);

export const academicSemesterRoute = router;
