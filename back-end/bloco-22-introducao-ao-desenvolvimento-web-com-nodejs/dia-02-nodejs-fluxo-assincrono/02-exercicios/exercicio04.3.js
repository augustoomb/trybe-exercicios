/*
Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
*/

const fs = require('fs').promises;

const arquivo = 'simpsons.json';

const alterarArquivo = async () => {

  const data = await fs.readFile(arquivo, 'utf-8')
  const personagens = JSON.parse(data);
  const novaListaPers = personagens.filter((pers) => pers.id != 10 && pers.id != 6);
  fs.writeFile(arquivo, JSON.stringify(novaListaPers));
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
  alterarArquivo();
}

main();