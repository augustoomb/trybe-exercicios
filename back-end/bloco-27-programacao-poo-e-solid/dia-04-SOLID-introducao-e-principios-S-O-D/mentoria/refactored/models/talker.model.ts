import mysql, { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ITalker } from '../interfaces';
import ITalkerModel from '../interfaces/talker.model.interface';

export default class TalkerModel implements ITalkerModel {
  constructor(private conn: mysql.Pool) {}

  async create(data: ITalker): Promise<number> {
    const { name, age, displayOrder } = data;

    const query =
      'INSERT INTO exercises.talker (name, age, display_order) VALUES(?, ?, ?)';
    const [newTalker] = await this.conn.execute<ResultSetHeader>(query, [
      name,
      age,
      displayOrder,
    ]);

    return newTalker.insertId;
  }

  async findById(id: number): Promise<ITalker> {
    const query = 'SELECT * FROM exercises.talker WHERE ID=?';
    const [talker] = await this.conn.execute<RowDataPacket[]>(query, [id]);

    return talker[0] as ITalker;
  }

  async findByDisplayOrder(displayOrder: number): Promise<ITalker> {
    const query = 'SELECT * FROM exercises.talker WHERE display_order=?';
    const [[result]] = await this.conn.execute<RowDataPacket[]>(query, [
      displayOrder,
    ]);

    return result as ITalker;
  }

  async update(id: number, displayOrder: number): Promise<void> {
    const query = 'UPDATE exercises.talker SET display_order=? WHERE id=?';
    await this.conn.execute<ResultSetHeader>(query, [displayOrder, id]);
  }

  async remove(id: number): Promise<void> {
    const query = 'DELETE FROM exercises.talker WHERE id=?';
    await this.conn.execute<ResultSetHeader>(query, [id]);
  }
}
