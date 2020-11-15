import express from 'express';
import multer from 'multer';
import { MachineController } from '../controllers/MachineController';
import multerConfig from '../config/multer';


const machineRoutes = express.Router();

const machineController = new MachineController ();
const upload = multer(multerConfig);

machineRoutes.get('/index', machineController.index);
machineRoutes.post('/store', upload.single('file'), machineController.store);
machineRoutes.get('/score', machineController.queryScore);



export { machineRoutes };
