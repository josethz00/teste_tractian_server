import express from 'express';
import { UserController } from '../controllers/UserController';


const userRoutes = express.Router();

const userController = new UserController();

userRoutes.get('/index', userController.index);
userRoutes.post('/store', userController.store);


export { userRoutes };
