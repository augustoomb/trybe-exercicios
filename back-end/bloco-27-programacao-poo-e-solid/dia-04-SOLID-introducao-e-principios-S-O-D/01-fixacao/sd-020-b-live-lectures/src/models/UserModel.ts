import { IUser } from './IUser';
import connection from './connection';

export default class UserModel {
  public static async create(newUser: IUser): Promise<void> {
    await connection.execute(
      `INSERT INTO solid_example.users 
        (username, email, password, role) VALUES (?,?,?,?)`,
      [newUser.username, newUser.email, newUser.password, newUser.role],
    );
  }
}