import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body;
    const result = await studentServices.createStudentIntoDb(StudentData);
    res.status(200).json({
      status: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'Failed to create student',
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      status: true,
      message: 'Students are retrived successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve students',
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      status: true,
      message: 'Single Student is retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: 'false',
      message: 'Failed to retrieve single student',
    });
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
