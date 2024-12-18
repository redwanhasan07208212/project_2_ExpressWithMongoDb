import { model, Schema } from 'mongoose';
import { TCourse, TPrequisiteCourses } from './course.interface';

const preRequisiteCourseSchema = new Schema<TPrequisiteCourses>({
  course: Schema.Types.ObjectId,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
const courseSchema = new Schema<TCourse>({
  title: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  prefix: {
    type: String,
    trim: true,
    required: true,
  },
  code: {
    type: Number,
    trim: true,
    required: true,
  },
  credits: {
    type: Number,
    trim: true,
    required: true,
  },
  preRequisiteCourses: [preRequisiteCourseSchema],
});

export const Course = model<TCourse>('Course', courseSchema);