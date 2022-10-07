// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import {
  validateBook,
  validatePartialBook
} from '../middlewares/books.middleware';


const router = Router();
const booksSlashId = '/books/:id';
const booksController = new BooksController();

router.get('/books', booksController.getAll);
router.put(booksSlashId, validateBook, booksController.update);
router.patch(booksSlashId, validatePartialBook, booksController.partialUpdate);

export default router;
