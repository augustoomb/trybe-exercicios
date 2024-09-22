import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.services';

class UserController {
  private userService:UserService = new UserService();

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();

    res.status(StatusCodes.OK).json(users);
  }
}

export default UserController;
