import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { adminController } from './admin.controller';
import { AdminValidations } from './admin.validation';

const router = express.Router();

router.get('/:id', adminController.getSingleAdmin);

router.patch(
  '/:id',
  validateRequest(AdminValidations.updateAdminValidationSchema),
  adminController.updateAdmin,
);

router.delete('/:id', adminController.deleteAdmin);

router.get('/', adminController.getAllAdmin);

export const AdminRoutes = router;
