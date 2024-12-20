import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validationRequest';
import { facultyController } from './faculty.controller';
import { FacultyValidations } from './faculty.validation';

const router = express.Router();

router.get('/:id', facultyController.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(FacultyValidations.updateFacultyValidationSchema),
  facultyController.updateFaculty,
);

router.delete('/:id', facultyController.deleteFaculty);

router.get('/', auth(), facultyController.getAllFaculty);

export const FacultyRoutes = router;
