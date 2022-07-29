const express = require('express'); // importando o express

const app = express(); // 1 - iniciando/instanciando uma aplicação express

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Olá mundo!'); // 4
}

// request: geralmente chamado de req, contém as informações enviadas pelo cliente ao servidor;

// response: geralmente chamado de res, permite o envio de informações do servidor de volta ao cliente;

