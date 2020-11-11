import express from 'express';
import { UnityController } from '../controllers/UnityController';


const unityRoutes = express.Router();

const unityController = new UnityController();

unityRoutes.get('/index', unityController.index);
unityRoutes.post('/store', unityController.store);



export { unityRoutes };
