import express from 'express';
import { loginValidation, signupValidation } from '../middlewares/AuthValidation.js';
import { signup, login } from '../controllers/AuthController.js';

const router = express.Router();

router.post('/login', loginValidation, login);

router.post('/signup', signupValidation, signup);

export default router;
