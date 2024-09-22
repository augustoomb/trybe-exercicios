import connection from "../models/connection";
import UserModel from "../models/user.model";
import User from "../interfaces/user.interfaces";

class UserService {
  private userModel:UserModel = new UserModel(connection);
  
  public async getAll(): Promise<User[]> {
    const users = await this.userModel.getAll();

    return users;
  }
}

export default UserService;
