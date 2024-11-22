import express from 'express';
import { studentControllers } from './student.controller';
const router = express.Router();

// WILL CALL CONTROLLER FUNCTIONS
router.post('/create-student', studentControllers.createStudent);

export const studentRoute = router;
router.get('/', studentControllers.getAllStudent);
router.get('/:studentId', studentControllers.getSingleStudent);
