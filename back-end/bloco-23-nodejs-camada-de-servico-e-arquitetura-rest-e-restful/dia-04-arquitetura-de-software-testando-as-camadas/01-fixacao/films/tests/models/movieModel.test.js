// 3º PASSO ( QUE SUBSTITUI O 1º.)

const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      /*
      {
        id: 1,
      };
      */

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});







// 1º PASSO, CRIO UM ARQUIVO DE TESTES; SIMULO UM MODEL. AO RODAR, JÁ ESPERO QUE VAI DAR PROBLEMA

// const { expect } = require('chai');

// /*
//   Como ainda não temos a implementação, vamos fixar
//   um objeto simulando os métodos que iremos desenvolver,
//   porém, eles não terão nenhum comportamento
// */
// const MoviesModel = {
//   create: () => { }
// };

// describe('Insere um novo filme no BD', () => {
//   const payloadMovie = {
//     title: 'Example Movie',
//     directedBy: 'Jane Dow',
//     releaseYear: 1999,
//   }

//   describe('quando é inserido com sucesso', () => {

//     it('retorna um objeto', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.be.a('object')
//     });

//     it('tal objeto possui o "id" do novo filme inserido', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.have.a.property('id')
//     });

//   });
// });