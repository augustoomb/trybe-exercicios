const express = require('express');
// const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

// app.use(bodyParser.json()); 
app.use(express.json()) // ao invés de importar um bodyparser externo como fiz na linha de cima, posso usar
// um parser do próprio express como fiz aqui.

app.get('/authors', async (_req, res) => { // user try catch
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAllBooks();
  res.status(200).json(books);
});

// buscar livros pelo id do autor
app.get('/books/authorid', async (req, res) => {
  const { id } = req.query;
  const books = await Book.getByAuthorId(id);

  if (books.length === 0) {
    return res.status(400).json({ message: 'Autor não encontrado' });
  }

  return res.status(200).json(books);
});

// buscar livros pelo id do livro
app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Book.getByBookId(id);

  if (books.length === 0) {
    return res.status(400).json({ message: 'Livro não encontrado' });
  }

  return res.status(200).json(books);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Book.createBook(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso! ' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

// http://localhost:3000/talker/search?q=He
// talker/search
// const { q } = req.query;