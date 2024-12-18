import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { CourseController } from './course.controller';
import { CourseValidations } from './course.validation';

const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseController.createCourse,
);

router.get('/:id', CourseController.getSingleCourse);

router.delete('/:id', CourseController.deleteCourse);

router.get('/', CourseController.getAllCourse);

export const CourseRoutes = router;
