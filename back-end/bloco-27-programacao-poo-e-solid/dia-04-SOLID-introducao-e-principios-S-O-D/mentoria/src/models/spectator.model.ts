import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ISpectator } from '../interfaces';
import conn from './connection';

const create = async ({ name, age, position }: ISpectator): Promise<number> => {
  const query =
    'INSERT INTO exercises.spectator (name, age, position) VALUES(?, ?, ?)';
  const [newSpectator] = await conn.execute<ResultSetHeader>(query, [
    name,
    age,
    position,
  ]);

  return newSpectator.insertId;
};

const findById = async (id: number): Promise<ISpectator> => {
  const query = 'SELECT * FROM exercises.spectator WHERE ID=?';
  const [talker] = await conn.execute<RowDataPacket[]>(query, [id]);

  return talker[0] as ISpectator;
};

const findByPosition = async (position: number): Promise<ISpectator> => {
  const query = 'SELECT * FROM exercises.spectator WHERE position=?';
  const [[result]] = await conn.execute<RowDataPacket[]>(query, [position]);

  return result as ISpectator;
};

const update = async (id: number, position: number): Promise<void> => {
  const query = 'UPDATE exercises.spectator SET position = ? WHERE id=?';
  await conn.execute<ResultSetHeader>(query, [position, id]);
};

const remove = async (id: number): Promise<void> => {
  const query = 'DELETE FROM exercises.spectator WHERE id=?';
  await conn.execute<ResultSetHeader>(query, [id]);
};

export default { create, findById, findByPosition, update, remove };
