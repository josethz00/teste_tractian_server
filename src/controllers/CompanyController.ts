import { Response, Request, NextFunction } from 'express';
import { Company } from '../models/Company';
import { Unity } from '../models/Unity';


interface MachineProps {

  _id: string;
  name: string;
  description: string;
  image_url: string;
  machine_model: string;
  health_score: number;
  user: {
    _id: string;
    username: string;
  }

}


class CompanyController {

  async index (_request: Request, response: Response) {

    const company = await Company.find();
    return response.status(200).json(company);

  }

  async queryOne (request: Request, response: Response) {

    const { id } = request.params;
    const company = await Company.findById(id).populate({
      path: 'unity',
      populate: {
        path: 'machines',
        model: 'Machine'
      }
    });
    if (!company)
      return response.status(404);
    if (!company.unity)
      return response.status(404);
    return response.status(200).json(company);

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
      next(error);
    }

  }

}

export { CompanyController };
