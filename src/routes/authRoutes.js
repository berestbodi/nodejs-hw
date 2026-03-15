import { Router } from 'express';
import { celebrate } from 'celebrate';
import * as authControllers from '../controllers/authController.js';
import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';

const router = Router();

router.post(
  '/register',
  celebrate(registerUserSchema),
  authControllers.registerUser,
);
router.post('/login', celebrate(loginUserSchema), authControllers.loginUser);

router.post('/refresh', authControllers.refreshUserSession);

router.post('/logout', authControllers.logoutUser);

export default router;
