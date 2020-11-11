import { Response, Request, NextFunction } from 'express';
import { User } from '../models/User';

class UserController {

  async index (_request: Request, response: Response) {

    const user = await User.find();
    return response.json(user);

  }

  async store (request: Request, response: Response, next: NextFunction) {

    try {
      const { username } = request.body;
      await User.create({
        username
      });
      return response.status(201).send('Usuário criado com sucesso');
    }

    catch (error) {
      next(error)
    }

  }

}

export { UserController };
