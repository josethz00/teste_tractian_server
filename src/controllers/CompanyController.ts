import { Response, Request, NextFunction } from 'express';
import { Company } from '../models/Company';

class CompanyController {

  async index (_request: Request, response: Response) {

    const company = await Company.find();
    return response.json(company);

  }

  async store (request: Request, response: Response, next: NextFunction) {

    try {
      const { name } = request.body;
      await Company.create({
        name
      });
      return response.status(201).send('Empresa cadastrada com sucesso');
    }

    catch (error) {
      next(error)
    }

  }

}

export { CompanyController };
