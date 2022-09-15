import connection from './connection';
import { RowDataPacket, ResultSetHeader } from 'mysql2/promise'
import { Movie, MovieBody } from '../types';

type MovieData = {
  id: number,
  title: string,
  directedBy: string,
  releaseYear: number,
} & RowDataPacket;

export default class MovieModel {
  async listAll() {
    const [result] = await connection.execute<MovieData[]>(`SELECT * FROM movies`);
    // return result as Movie[];
    return result;
  }

  async create(movie: MovieBody): Promise<Movie> {
    const [result] = await connection.execute<ResultSetHeader>(`INSERT INTO movies (title, directedBy, releaseYear) VALUES  
    (?, ?, ?)`, [movie.title, movie.directedBy, movie.releaseYear]);

    return {
      id: result.insertId,
      directedBy: movie.directedBy,
      releaseYear: movie.releaseYear,
      title: movie.title
    };
  }
}