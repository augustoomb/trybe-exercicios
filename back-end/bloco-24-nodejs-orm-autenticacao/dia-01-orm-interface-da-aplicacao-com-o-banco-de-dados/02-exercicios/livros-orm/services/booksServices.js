const { Book } = require('../models/index.js');

const getAll = async () => {
  const booksList = await Book.findAll();

  return booksList;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const create = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
};

module.exports = { getAll, getById, create };
