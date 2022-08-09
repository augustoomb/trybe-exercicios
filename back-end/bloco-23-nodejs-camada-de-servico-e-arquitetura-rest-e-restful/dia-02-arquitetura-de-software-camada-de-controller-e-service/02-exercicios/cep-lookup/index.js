const express = require('express');
const rescue = require('express-rescue');
const cepController = require('./controllers/cepController');

const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(express.json())

app.get('/ping', rescue(cepController.ping));
app.get('/cep/:cep', rescue(cepController.getAddressByCep));

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App cep-lookup rodando na porta ${PORT}`);
});