/*
Crie uma função que substitua o personagem Nelson Muntz pela personagem
Maggie Simpson no arquivo simpsonFamily.json.
*/

const fs = require('fs').promises;

const arquivo = 'simpsonFamily.json';

const substituirPersonagem = async () => {

  const data = await fs.readFile(arquivo, 'utf-8')
  const personagens = JSON.parse(data);
  personagens.forEach((pers) => {
    if (pers.name === "Nelson Muntz") {
      pers.name = "Maggie Simpson"
    }
  })
  // personagens.push({ id: '5', name: 'Nelson Muntz' })
  fs.writeFile(arquivo, JSON.stringify(personagens));
}

function main() {
  substituirPersonagem();
}

main();