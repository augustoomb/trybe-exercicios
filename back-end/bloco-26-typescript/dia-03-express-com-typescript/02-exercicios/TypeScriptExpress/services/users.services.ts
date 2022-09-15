import User from '../interfaces/user.interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { NotFoundError } from 'restify-errors';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);

    if (!user) {
      throw new NotFoundError('Not found');
    }

    return user;
  }

  public async create(user: User): Promise<User> {
    return await this.model.create(user);
  }
}

export default UserService;
