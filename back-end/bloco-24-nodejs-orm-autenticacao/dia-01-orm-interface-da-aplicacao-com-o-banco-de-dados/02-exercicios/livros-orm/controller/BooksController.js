const express = require('express');
const bookServices = require('../services/booksServices');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await bookServices.getById(id);

  if (!book) {
    res.status(404).json({ "message": "Book not found" });
  }

  res.status(200).json(book);
});

router.get('/', async (_req, res) => {
  const books = await bookServices.getAll();

  res.status(200).json(books);
});

router.post('/', async (req, res) => {
  const bookObj = req.body;

  const newBook = await bookServices.create(bookObj);

  res.status(201).json(newBook);
});

router.put('/:id', async (req, res) => {
  const bookObj = req.body;
  const { id } = req.params;

  const updatedBook = await bookServices.update(id, bookObj);

  if (updatedBook[0]) {
    return res.status(200).json({ message: 'book updated!' });
  }

  return res.status(404).json({ message: 'Book not found!' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deletedBook = await bookServices.remove(id);

  if (deletedBook) {
    return res.status(200).json({ message: 'book deleted!' });
  }

  return res.status(404).json({ message: 'Book not found!' });
});

module.exports = router;