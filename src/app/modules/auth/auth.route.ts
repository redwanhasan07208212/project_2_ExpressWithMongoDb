import { USER_ROLE } from './../user/user.constant';
import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { AuthControllers } from './auth.controller';
import { AuthValidation } from './auth.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);
router.post(
  '/change-password',auth(USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePasswordUser,
);
export const AuthRoute = router;
