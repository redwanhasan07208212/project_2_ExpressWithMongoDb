import QueryBuilder from '../../builder/queryBuilder';
import { courseSearchAbleFields } from './course.constant';
import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseFromDb = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};
const getAllCourseFromDb = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(Course.find(), query)
    .search(courseSearchAbleFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  return result;
};
const getSingleCourseFromDb = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};

const deleteCourseFromDb = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const CourseService = {
  createCourseFromDb,
  getAllCourseFromDb,
  getSingleCourseFromDb,
  deleteCourseFromDb,
};
