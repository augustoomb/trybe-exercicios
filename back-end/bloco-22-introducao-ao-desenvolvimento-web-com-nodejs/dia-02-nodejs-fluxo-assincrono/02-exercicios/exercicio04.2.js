/*
Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que
é resolvida com os dados da personagem que possui o id informado.
Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
*/

const fs = require('fs').promises;

const arquivo = 'simpsons.json';

function buscarSimpsonPorId(id) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(arquivo, 'utf-8')
      .then((data) => {
        const personagens = JSON.parse(data);
        const simpsonBuscado = personagens.find((pers) => pers.id == id); // se eu usar === não dá, pois o id do arquivo vem como string
        if (simpsonBuscado) {
          resolve(simpsonBuscado);
        } else {
          reject(new Error("id não encontrado"))
        }
      })
      .catch((error) => {
        reject(new Error(error));
      })
  })
  return promise;
}

function main() {
  buscarSimpsonPorId(30)
    .then((person) => console.log(person))
    .catch((err) => console.log(err.message));
}

main();