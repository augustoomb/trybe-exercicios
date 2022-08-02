const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//ROTA PARA SALES
const salesRouter = require('./routers/salesRouter');
app.use('/sales', salesRouter);

//ROTA PARA SIGNUP
const signupRouter = require('./routers/signupRouter');
app.use('/signup', signupRouter);

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => { console.log('Exercicios 1 e 2 rodando na porta 3001') });