import express from 'express';
import tokenUtil from '../utilit/token.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/info', tokenUtil.verifyToken, userController.getInfoByToken);

router.post('/login', userController.login);
router.post('/register', userController.register);
//router.put('/updatepassword/:userId', verifyToken, updateUserPassword);

export default router;
