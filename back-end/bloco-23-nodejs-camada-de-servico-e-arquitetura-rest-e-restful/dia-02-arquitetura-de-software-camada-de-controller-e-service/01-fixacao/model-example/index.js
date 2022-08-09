const express = require('express');
const rescue = require('express-rescue');
const Author = require('./controllers/Authors');

const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(express.json()) // ao invés de importar um bodyparser externo, posso usar um parser do próprio express

app.get('/authors', rescue(Author.getAll));
app.get('/authors/:id', rescue(Author.findById));
app.post('/authors', rescue(Author.create));

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
