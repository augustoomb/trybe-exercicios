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
  const { title, author, pageQuantity } = req.body;
  const newBook = await bookServices.create(title, author, pageQuantity);

  res.status(201).json(newBook);
});

module.exports = router;