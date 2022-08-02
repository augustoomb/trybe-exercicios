// ARQUIVO A PARTE DO PROJETO - APENAS PARA MOSTRAR O USO DE MIDDLEWARES DE ERRO

/*

⚠️ Atenção: Jamais devemos realizar a leitura de um arquivo do sistema de arquivos dessa forma.
Concatenar parâmetros recebidos do usuário diretamente na chamada para qualquer método
representa uma falha gigantesca de segurança. Vamos fazer isso aqui nesse momento para fins didáticos.
Repetindo: não tente isso em casa em produção!

CRIAR MIDDLEWARE DE ERROS OU CHAMADA PARA ESSES MIDDLEWARE SEMPRE NO FIM DO ARQUIVO E DEPOIS DAS ROTAS

*/

// ABAIXO EXEMPLO COM O EXPRESS-RESCUE

/* errorHandlerExample.js */
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

app.get(
  '/:fileName',
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002);









// ABAIXO EXEMPLO SEM O EXPRESS-RESCUE

// const express = require('express');
// const fs = require('fs/promises');

// const app = express();

// app.get('/:fileName', async (req, res, next) => {
//   try {
//     const file = await fs.readFile(`./${req.params.fileName}`);
//     res.send(file.toString('utf-8'));
//   } catch (e) {
//     next(e);
//   }
// });

// app.use(function (err, req, res, next) {
//   res.status(500).json({ error: `Erro: ${err.message}` });
// });

// app.listen(3002);