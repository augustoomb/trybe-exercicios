import UserService from "../services/users.services";
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from "express";
import User from "../interfaces/user.interfaces";

class UsersController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.service.getAll();
    res.status(StatusCodes.OK).json(users);
  }

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const user = await this.service.getById(id);
    res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request<unknown, unknown, User>, res: Response<User>) => {
    const user = req.body;

    const userCreated = await this.service.create(user);
    res.status(StatusCodes.CREATED).json(userCreated);
  }
}

export default UsersController;
