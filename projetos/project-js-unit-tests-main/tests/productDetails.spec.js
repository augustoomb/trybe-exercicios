const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('alcool','mascara'))).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails('alcool','mascara')).length);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    for(let i=0; i<productDetails.length; i+=1){
      expect(typeof productDetails('bala', 'chocolate')[i]).toBe('object');
    }
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(JSON.stringify(productDetails('alcool', 'mascara')[0]) !== JSON.stringify(productDetails('alcool', 'mascara')[1])).toBeTruthy();
    // Teste se os dois productIds terminam com 123.
    expect( (productDetails('alcool', 'mascara')[0].details.productId).slice(-3) === '123' && (productDetails('alcool', 'mascara')[1].details.productId).slice(-3) === '123' ).toBeTruthy();
  });
});

/* JSON.stringify(): converte valores para uma string. Fiz pra facilitar na comparação.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
*/
