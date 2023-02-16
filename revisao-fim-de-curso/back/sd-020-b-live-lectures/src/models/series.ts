import { RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import Series from '../interfaces/series';
import { SimpleModel } from './model';

const DATABASE = 'cartoon';

export default class SerieModel implements SimpleModel<Series> {
  constructor(private tableName: string = 'Series', private connection = conn) { }
  async create(obj: Series) {
    await this.connection.execute(
      `INSERT INTO ${DATABASE}.${this.tableName}(
        name
      ) VALUES (?);`,
      [ obj.name ]
    );
  }

  async list() {
    const result = await this.connection.execute(
      `SELECT id, name
      FROM ${DATABASE}.${this.tableName};`
    );
    const [ series ] = result;
    return series as Series[];
  }

  async find(id: number): Promise<Series | null> {
    const result = await this.connection.execute(
      `SELECT id, name
      FROM ${DATABASE}.${this.tableName} as S WHERE S.id = ?;`, [ id ]
    );
    const [ series ] = result as RowDataPacket[];
    return series[ 0 ] as Series;
  }
}