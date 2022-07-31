// IMPORTANDO E INSTANCIANDO O EXPRESS
const express = require('express');
const app = express();


// CORS
const cors = require('cors');
app.use(cors());


// BODY PARSER - npm i body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// RECURSOS PARA ACESSAR ARQUIVOS
const fs = require('fs').promises;
const arquivo = 'simpsons.json';

// FUNÇÃO PARA LER ARQUIVO DOS SIMPSONS E TRAZER UM ARR COM OS PERSONAGENS
async function lerArquivoSimpsons() {
  const data = await fs.readFile(arquivo, 'utf-8');
  return JSON.parse(data);
}

// FUNÇÃO PARA BUSCAR ID EM UM ARRAY DE OBJETOS
function buscarNoArrayPorId(arr, id) {
  return arr.find((item) => item.id == id)
}

async function escreverArrNoArquivo(arr) {
  await fs.writeFile(arquivo, JSON.stringify(arr));
}


// 6 - Crie um endpoint GET /simpsons 
app.get('/simpsons', async (req, res) => {
  try {
    const arrSimpsons = await lerArquivoSimpsons()
    res.status(200).json(arrSimpsons);
  } catch (error) {
    res.status(500).json(`Ocorreu um erro: ${error.message}`)
  }
})

// 7 - Crie um endpoint GET /simpsons/:id 
app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const arrSimpsons = await lerArquivoSimpsons();
    const simpProcurado = buscarNoArrayPorId(arrSimpsons, id);
    if (simpProcurado) {
      return res.status(200).json(simpProcurado);
    }
    return res.status(404).json({ message: 'simpson not found' });

  } catch (error) {
    res.status(500).json(`Ocorreu um erro: ${error.message}`)
  }
})

// Crie um endpoint POST /simpsons
app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  try {
    const arrSimpsons = await lerArquivoSimpsons()
    const simpProcurado = buscarNoArrayPorId(arrSimpsons, id);
    if (!simpProcurado) {
      arrSimpsons.push({
        "id": id,
        "name": name
      })
      await escreverArrNoArquivo(arrSimpsons);
      res.status(204).end(); // Para encerrar a request sem enviar nenhum dado
    }
    return res.status(409).json({ message: 'id already exists' });
  } catch (error) {
    res.status(500).json(`Ocorreu um erro: ${error.message}`)
  }
})

// RETORNANDO MENSAGEM PARA TENTATIVA DE ACESSO A ROTAS INEXISTENTES.
app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path}  não existe!` })
})

// RODANDO A APLICAÇÃO
app.listen(3001, () => {
  console.log('App simpsons rodando...')
});