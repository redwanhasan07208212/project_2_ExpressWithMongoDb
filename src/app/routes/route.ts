import { Router } from 'express';
import { academicSemesterRoute } from '../modules/academicSemester/academicSemester.router';
import { StudentRoutes } from '../modules/student/student.route';
import { userRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semester',
    route: academicSemesterRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
