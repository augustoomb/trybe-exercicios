// 3 - USANDO O STUBS

const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é igual a "null"', () => {
        const resposta = leArquivo('arquivo_que_nao_existe.txt');

        expect(resposta).to.be.equal(null);
      });
    });
  });
});




// 2.1 BÁSICO DO SINON

/*
npm install --save-dev sinon

O Sinon é uma ferramenta que fornece funções para diversos tipos dos Test Doubles ou, numa tradução livre,
Dublês de Testes (remetendo aos dublês de filmes).
No momento focaremos em um tipo de Test Double, o stub.
Stubs são objetos que podemos utilizar para simular interações com dependências externas ao que
estamos testando de fato (na literatura, é comum referir-se ao sistema sendo testado como SUT,
que significa System under Test).

Perceba que precisamos importar o módulo fs e, então, falamos para o sinon criar um stub para a
função readFileSync, que retornará 'Valor a ser retornado', conforme especificamos na chamada para returns.
*/

/*

const fs = require('fs');

const sinon = require('sinon');

sinon.stub(fs, 'readFileSync')
  .returns('Valor a ser retornado');

*/





// 2 - ESTRUTURA USADO O CHAI - ANTES DE USAR O STUBS

/*
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      const resposta = leArquivo('arquivo.txt');

      it('é uma string', () => {
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    it('a resposta é igual a "null"', () => {
      const resposta = leArquivo('arquivo_que_nao_existe.txt');

      expect(resposta).to.be.equal(null);
    });
  });
});

*/



// 1- ESTRUTURA BÁSICA INICIAL (mocha)

/*

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        //
      });

      it('é igual ao conteúdo do arquivo', () => {
        //
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    describe('a resposta', () => {
      it('é igual a "null"', () => {
        //
      });
    });
  });
});

*/