import express from 'express';
import { machineRoutes } from './machine.routes';
import { userRoutes } from './user.routes';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/machines', machineRoutes);


export { routes };
