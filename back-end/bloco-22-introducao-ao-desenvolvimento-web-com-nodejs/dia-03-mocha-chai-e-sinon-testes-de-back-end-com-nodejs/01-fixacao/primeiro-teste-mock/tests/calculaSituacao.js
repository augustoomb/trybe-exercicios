const { expect } = require('chai');

const calculaSituacao = require('../calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovacao"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovacao');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna "aprovacao"', () => {
    const resposta = calculaSituacao(9);

    expect(resposta).to.be.equals('aprovacao');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna "aprovacao"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('aprovacao');
  });
});






// 1ª PARTE: TESTES SIMPLES

  // const { expect } = require('chai');

  // const calculaSituacao = require('../calculaSituacao');

  // describe('Quando a média for menor que 7', () => {
  //   it('retorna "reprovacao"', () => {
  //     const resposta = calculaSituacao(4);

  //     expect(resposta).equals('reprovacao');
  //   });
  // });


/* OU

const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovacao"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovacao');
  });
});

*/

// FIM DA 1ª PARTE: TESTES SIMPLES