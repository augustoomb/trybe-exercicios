import { Request, Response } from 'express';
import { IUser } from '../models/IUser';
import create from '../service/userService';

const createUser = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  try {
    await create(user);
    return res.status(201).json({
      message: 'Usuário criado com sucesso!',
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    return res.status(500).end();
  }
};

export default createUser;