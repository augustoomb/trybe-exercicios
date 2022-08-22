const { Book } = require('../models/index.js');

const getAll = async () => {
  const booksList = await Book.findAll();

  return booksList;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const create = async (bookObj) => {
  // const { title, author, pageQuantity } = bookObj;
  // const newBook = await Book.create({ title, author, pageQuantity });
  const newBook = await Book.create(bookObj);

  return newBook;
};

const update = async (bookId, bookObj) => {
  const updatedBook = await Book.update(
    bookObj,
    { where: { id: bookId } },
  );

  // console.log(updatedBook); // [1] ou [0]

  return updatedBook;
};

const remove = async (bookId) => {
  const deletedBook = await Book.destroy(
    { where: { id: bookId } },
  );

  // console.log(deletedBook); // 1 ou 0

  return deletedBook;
};

module.exports = { getAll, getById, create, update, remove };
