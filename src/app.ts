import * as dotenv from 'dotenv';
dotenv.config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
});
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';
import mongoose from 'mongoose';
import { MONGODB } from  './config/mongo';

mongoose.connect(MONGODB!, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json());
app.use(routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error: any = new Error ('Page not found');
  error.status = 404;
  next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction)=>{
  res.status(error.status || 500);
  res.json({error: error.message})
});

export { app };
