import express from 'express';
import { academicSemesterController } from './academicSemester.controller';

const router = express.Router();
router.post(
  '/create-academic-semester',
  academicSemesterController.createAcademicSemester,
);
export const academicSemesterRoute = router;
