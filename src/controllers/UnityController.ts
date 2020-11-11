import { Response, Request, NextFunction } from 'express';
import { Company } from '../models/Company';
import { Unity } from '../models/Unity';


class UnityController {

  async index (_request: Request, response: Response) {

    const unity = await Unity.find();
    return response.status(200).json(unity);

  }

  async store (request: Request, response: Response, next: NextFunction) {

    try {

      const { name } = request.body;
      const { company_id } = request.headers;


      const company = await Company.findById(company_id);

      if (company) {

        const unity = await Unity.create({
          name
        });

        company.unity!.push(unity._id);
        await company.save();

        return response.status(201).send('Unidade cadastrada com sucesso');

      }

      return response.status(404).send('A empresa especificada não existe');

    }

    catch (error) {
      next(error);
    }

  }

}

export { UnityController };
