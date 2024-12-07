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
  year: {
    type: String,
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
AcademicSemeterModel.pre('save', async function (next) {
  const isSemesterExits = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExits) {
    throw new Error('Semester is exits already');
  }
  next();
});
export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemeterModel,
);
