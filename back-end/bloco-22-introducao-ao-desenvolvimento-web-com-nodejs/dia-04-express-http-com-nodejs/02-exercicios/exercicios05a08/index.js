const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const fs = require('fs').promises;
const nomeDoArquivo = 'simpsons.json';

app.get('/simpsons', function (req, res) {
  fs.readFile(nomeDoArquivo, 'utf-8')
    .then((data) => {
      const arrSimpsons = JSON.parse(data);
      return res.status(200).json(arrSimpsons);
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    })
});

app.get('/simpsons/:id', function (req, res) {
  const { id } = req.params;

  fs.readFile(nomeDoArquivo, 'utf-8')
    .then((data) => {
      const arrSimpsons = JSON.parse(data);
      const simpProcurado = arrSimpsons.find((simp) => simp.id === Number(id));
      if (simpProcurado) {
        return res.status(200).json(simpProcurado);
      }
      return res.status(404).json({ message: 'simpson not found' });
      // res.status(200).json(arrSimpsons);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    })
});


app.post('/simpsons', async function (req, res) {
  const { id, name } = req.body;

  // EM ANDAMENTO....

  // const arquivo = await fs.readFile(nomeDoArquivo, 'utf-8');
  // const arrSimpsons = await JSON.parse(arquivo);

  // arrSimpsons.push({
  //   "id": id,
  //   "name": name
  // })

  // try {
  //   await fs.readFile(nomeDoArquivo, JSON.stringify(arrSimpsons));
  //   return res.status(200)
  // } catch (error) {
  //   return res.status(500)
  // }
})

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => {
  console.log('Aplicação Simpsons ouvindo na porta 3001');
});