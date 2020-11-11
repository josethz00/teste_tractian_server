import express from 'express';
import { CompanyController } from '../controllers/CompanyController';


const companyRoutes = express.Router();

const companyController = new CompanyController();

companyRoutes.get('/index', companyController.index);
companyRoutes.get('/query-one/:id', companyController.queryOne);
companyRoutes.post('/store', companyController.store);



export { companyRoutes };
