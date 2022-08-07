const connection = require('./connection');

const getNewBook = ({ id, title, firstName, middleName, lastName }) => {

  const Author = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return {
    id,
    title,
    Author,
  };
};

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT B.id, B.title, A.first_name As firstName, A.middle_name As middleName, ' +
    'A.last_name AS lastName FROM model_example.books AS B ' +
    'INNER JOIN model_example.authors AS A ON A.id = B.author_id'
  );
  return books.map(getNewBook);
}

const getByAuthorId = async (idAuthor) => {
  const [books] = await connection.execute(
    'SELECT B.id, B.title, A.first_name As firstName, A.middle_name As middleName, ' +
    'A.last_name AS lastName FROM model_example.books AS B ' +
    `INNER JOIN model_example.authors AS A ON A.id = B.author_id WHERE A.id = ${idAuthor}`
  );
  return books.map(getNewBook);
}

const getByBookId = async (idBook) => {
  const [books] = await connection.execute(
    'SELECT B.id, B.title, A.first_name As firstName, A.middle_name As middleName, ' +
    'A.last_name AS lastName FROM model_example.books AS B ' +
    `INNER JOIN model_example.authors AS A ON A.id = B.author_id WHERE B.id = ${idBook}`
  );
  return books.map(getNewBook);
}

const authorExists = async (authorId) => {
  const [authors] = await connection.execute(
    `SELECT * FROM model_example.authors WHERE id = ${authorId};`
  )
  return authors.length > 0;
}

const isValid = async (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId) return false;

  const exists = await authorExists(authorId);

  if (!exists) {
    return false;
  }
  return true;
};

const createBook = async (title, authorId) => {
  connection.execute(
    `INSERT INTO model_example.books (title, author_id) VALUES(?, ?)`,
    [title, authorId],
  )
}

module.exports = {
  getAllBooks,
  getByAuthorId,
  getByBookId,
  isValid,
  createBook,
};
