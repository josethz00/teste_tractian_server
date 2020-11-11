import express from 'express';
import { companyRoutes } from './company.routes';
import { machineRoutes } from './machine.routes';
import { userRoutes } from './user.routes';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/machines', machineRoutes);
routes.use('/company', companyRoutes);


export { routes };
