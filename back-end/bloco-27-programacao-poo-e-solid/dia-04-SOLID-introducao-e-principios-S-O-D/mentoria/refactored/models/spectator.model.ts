import mysql, { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ISpectator } from '../interfaces';
import ISpectatorModel from '../interfaces/spectator.model.interface';

export default class SpectatorModel implements ISpectatorModel {
  constructor(private conn: mysql.Pool) {}

  async create(data: ISpectator) {
    const { name, age, position } = data;

    const query =
      'INSERT INTO exercises.spectator (name, age, position) VALUES(?, ?, ?)';
    const [newSpectator] = await this.conn.execute<ResultSetHeader>(query, [
      name,
      age,
      position,
    ]);

    return newSpectator.insertId;
  }

  async findById(id: number): Promise<ISpectator> {
    const query = 'SELECT * FROM exercises.spectator WHERE ID=?';
    const [talker] = await this.conn.execute<RowDataPacket[]>(query, [id]);

    return talker[0] as ISpectator;
  }

  async findByPosition(position: number): Promise<ISpectator> {
    const query = 'SELECT * FROM exercises.spectator WHERE position=?';
    const [[result]] = await this.conn.execute<RowDataPacket[]>(query, [
      position,
    ]);

    return result as ISpectator;
  }

  async update(id: number, position: number): Promise<void> {
    const query = 'UPDATE exercises.spectator SET position=? WHERE id=?';
    await this.conn.execute<ResultSetHeader>(query, [position, id]);
  }

  async remove(id: number): Promise<void> {
    const query = 'DELETE FROM exercises.spectator WHERE id=?';
    await this.conn.execute<ResultSetHeader>(query, [id]);
  }
}
