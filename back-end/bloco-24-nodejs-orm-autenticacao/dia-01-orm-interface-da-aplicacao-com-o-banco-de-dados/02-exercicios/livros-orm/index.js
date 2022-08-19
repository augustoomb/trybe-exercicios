const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const booksController = require('./controller/BooksController');

app.use(express.json());

app.use('/books', booksController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));