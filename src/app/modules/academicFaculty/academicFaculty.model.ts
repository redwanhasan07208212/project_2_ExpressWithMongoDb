import { model, Schema } from 'mongoose';
import { TacademicFaculty } from './academicFaculty.interface';

const AcademicFacultyModel = new Schema<TacademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicFaculty = model<TacademicFaculty>(
  'AcademicFaculty',
  AcademicFacultyModel,
);
