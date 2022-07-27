/*
Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo,
chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
*/

const fs = require('fs').promises;

const arquivoLeitura = 'simpsons.json';
const arquivoEscrita = 'simpsonFamily.json';

const criarNovoArquivo = async () => {

  const data = await fs.readFile(arquivoLeitura, 'utf-8')
  const personagens = JSON.parse(data);
  const novaListaPers = personagens.filter((pers) => pers.id <= 4);
  fs.writeFile(arquivoEscrita, JSON.stringify(novaListaPers));
  // .then((data) => {
  //   const personagens = JSON.parse(data);
  //   novaListaPers = personagens.filter((pers) => pers.id != 10 && pers.id != 6);
  // })
  // .catch((error) => {
  //   console.log(error);
  // })

  // fs.writeFile(arquivo, JSON.stringify(novaListaPers))
  //   .then(() => console.log("Arquivo alterado"))
  //   .catch((error) => console.log(error))
}

function main() {
  criarNovoArquivo();
}

main();