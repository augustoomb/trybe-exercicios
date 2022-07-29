// EXERCICIO 1 e EXERCÍCIO 3

const { expect } = require('chai');

const verificarNumero = require('../funcoes');

describe('Questão 1', () => {
  describe('Verifica se o valor informado', () => {
    it('não é um número', () => {
      const resposta = verificarNumero("augusto");
      expect(resposta).to.be.equals("o valor deve ser um número");
    })
  })
  describe('Verifica se ao passar um número qualquer', () => {
    it('a resposta é uma string', () => {
      const resposta = verificarNumero(10);
      expect(resposta).to.be.a('string');
    })
  })
  describe('Quando o número passado for maior que 0', () => {
    it('a resposta é "positivo"', () => {
      const resposta = verificarNumero(10);
      expect(resposta).to.be.equals('positivo');
    })
  })
  describe('Quando o número passado for menor que 0', () => {
    it('a resposta é "negativo"', () => {
      const resposta = verificarNumero(-5);
      expect(resposta).to.be.equals('negativo');
    })
  })
  describe('Quando o número passado for igual a 0', () => {
    it('a resposta é "neutro"', () => {
      const resposta = verificarNumero(0);
      expect(resposta).to.be.equals('neutro');
    })
  })
})