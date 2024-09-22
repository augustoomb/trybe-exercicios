import {Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> { // Promise<Array<User>>
    const result = await this.connection.execute('SELECT * FROM Users');
    const [rows] = result;

    return rows as User[];
  }
}