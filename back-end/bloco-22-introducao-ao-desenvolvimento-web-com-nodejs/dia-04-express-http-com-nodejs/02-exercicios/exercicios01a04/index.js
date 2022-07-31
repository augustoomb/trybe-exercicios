const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/ping', function (req, res) {
  res.json({ message: 'pong' });
})

app.post('/hello', function (req, res) {
  const { name } = req.body;
  res.status(201).json({
    "message": `Hello, ${name}!`
  })
})

app.post('/greetings', function (req, res) {
  const { name, age } = req.body;

  if (age > 17) {
    return res.status(200).json({
      "message": `Hello, ${name}!`
    })
  }

  return res.status(401).json({
    "message": 'Unauthorized'
  })
})

app.put('/users/:name/:age', function (req, res) {
  const { name, age } = req.params;

  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
})

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001')
})