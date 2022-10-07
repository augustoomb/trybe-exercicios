// ./models/book.model.ts

import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Book from '../interfaces/book.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const result = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM books');
    const [rows] = result;
    return rows as Book[];
  }

  public async getById(id: number): Promise<Book> {
    const result = await this.connection
      .execute('SELECT * FROM books WHERE id=?', [id]);
    const [rows] = result;
    const [book] = rows as Book[];
    return book;
  }

  public async update(id: number, book: Book) {
    const { title, price, author } = book;
    await this.connection.execute(
      'UPDATE books SET title=?, price=?, author=? WHERE id=?',
      [title, price, author,, id]
    );
  }

  public async partialUpdate(id: Required<Book>["id"], book: Partial<Book>) {
    const query = 'UPDATE books SET ';
    const queryUpdate = Object.keys(book).map(field => `${field}=?`).join(", ");
    const queryValues = Object.values(book);

    await this.connection.execute(
      `${query} ${queryUpdate} WHERE id=?`,
      [...queryValues, id]
    );
  }

}
