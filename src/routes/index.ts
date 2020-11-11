import express from 'express';
import { companyRoutes } from './company.routes';
import { machineRoutes } from './machine.routes';
import { userRoutes } from './user.routes';
import { unityRoutes } from './unity.routes';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/machines', machineRoutes);
routes.use('/companies', companyRoutes);
routes.use('/unities', unityRoutes);


export { routes };
