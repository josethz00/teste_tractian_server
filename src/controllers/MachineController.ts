import { Response, Request, NextFunction } from 'express';
import { Unity } from '../models/Unity';
import { Machine } from '../models/Machine';
import { User } from '../models/User';


class MachineController {

  async index (_request: Request, response: Response) {

    const machine = await Machine.find();
    return response.status(200).json(machine);

  }

  async queryScore (_request: Request, response: Response) {

    const machine = await Machine.find().select('health_score').exec();
    let variable;
    const results: number[] = [0, 0, 0];

    for (variable of machine) {
      if (variable.health_score >= 80) {
        results[0] += 1;
      }
      else if (variable.health_score > 60 && variable.health_score < 80) {
        results[1] += 1;
      }
      else {
        results[2] += 1;
      }
    }

    return response.status(200).json(results);

  }

  async store (request: Request, response: Response, next: NextFunction) {

    try {

      const file = request.file as Express.MulterS3.File;

      const { user_id, unity_id } = request.headers;

      const { name, description, machine_model, health_score, status } = request.body;

      const _unity = await Unity.findById(unity_id);
      const _user = await User.findById(user_id);

      if (_unity && _user) {

        const machine = await Machine.create({
          name,
          description,
          image_url: file.location,
          machine_model,
          health_score,
          unity: _unity!._id,
          user: _user!._id,
          status
        });

        _unity.machines!.push(machine._id);
        await _unity.save();

        return response.status(201).send('Unidade cadastrada com sucesso');

      }

      return response.status(404).send('Unidade ou usuário especificados não existem');

    }

    catch (error) {
      next(error);
    }

  }

}

export { MachineController };
