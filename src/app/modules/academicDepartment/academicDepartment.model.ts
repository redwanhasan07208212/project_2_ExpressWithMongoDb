import { model, Schema } from 'mongoose';
import AppError from '../../errors/AppError';
import { TAcademicDepartment } from './academicDepartment.interface';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new AppError(404, 'This Department is already Exist');
  }
  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const isQuery = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne(isQuery);
  if (!isDepartmentExist) {
    throw new AppError(404, 'This Department does not Exist');
  }
  next();
});
export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
