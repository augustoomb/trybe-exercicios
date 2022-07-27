const fs = require('fs').promises;

const arquivo = 'simpsons.json';

fs.readFile(arquivo, 'utf-8')
  .then((data) => {
    const personagens = JSON.parse(data);
    personagens.map((pers) => {
      console.log(`${pers.id} - ${pers.name}`)
    })
  })
  .catch((error) => {
    console.log(error);
  })