import express from 'express';
import userController from './controllers/userController.js';

const router = express.Router();

router.post('/login', userController.login);
//router.post('/register', registerUser);
//router.put('/updatepassword/:userId', updateUserPassword);



export default router;
