// ./services/books.service.ts

import connection from '../models/connection';
// import BookModel from '../models/book.model';
import BookModel from '../database/models/book';
import Book from '../interfaces/book.interface';
import { NotFoundError, InvalidArgumentError } from 'restify-errors';

class BookService {
  model = BookModel;

  public async getAll(): Promise<Book[]> {
    const books = await this.model.findAll();
    return books;
  }

  public async getById(id: number): Promise<Book | null> {
    const book = await this.model.findByPk(id);
    return book;
  }

  public async update(id: number, book: Book): Promise<void> {
    const bookFound = await this.model.findByPk(id);
    if (!bookFound) {
      throw new NotFoundError('NotFoundError');
    }

    await this.model.update({ id, ...book }, { where: { id } });
  }

  public async partialUpdate(id: number, book: Book): Promise<void> {
    const bookFound = await this.model.findByPk(id);
    if (!bookFound) {
      throw new NotFoundError('NotFoundError');
    }

    await this.model.update({ id, ...book }, { where: { id } });
  }
}

export default BookService;
