import { model, Schema } from 'mongoose';
import { codeName, Months, semesterName } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';

const AcademicSemeterModel = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: semesterName,
    required: true,
  },
  code: {
    type: String,
    enum: codeName,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startMonth: {
    type: String,
    enum: Months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: Months,
    required: true,
  },
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemeterModel,
);
