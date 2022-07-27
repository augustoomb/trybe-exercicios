/*
Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
*/

const fs = require('fs').promises;

const arquivo = 'simpsonFamily.json';

const adicionarPersonagem = async () => {

  const data = await fs.readFile(arquivo, 'utf-8')
  const personagens = JSON.parse(data);
  personagens.push({ id: '5', name: 'Nelson Muntz' })
  fs.writeFile(arquivo, JSON.stringify(personagens));
}

function main() {
  adicionarPersonagem();
}

main();