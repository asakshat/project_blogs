import express from 'express';
import {
	loginUser,
	signUpUser,
} from '../controllers/authController.mjs';
const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signUpUser);

export default router;
