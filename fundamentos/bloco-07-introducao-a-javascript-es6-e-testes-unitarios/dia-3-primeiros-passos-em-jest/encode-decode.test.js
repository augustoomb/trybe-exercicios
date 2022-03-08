/*

-Teste se encode e decode são funções;

-Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;

-Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , 
respectivamente;

-Teste se as demais letras/números não são convertidos para cada caso;

-Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada
 como parâmetro.

*/

const {encode, decode} = require('./encode-decode');

describe('A função encode', () => {

  test('testar se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  test('testar se vogal "a" é convertida em 1', () => {
    expect(encode("a")).toBe("1");
  })

  test('testar se vogal "e" é convertida em 2', () => {
    expect(encode("e")).toBe("2");
  })

  test('testar se vogal "i" é convertida em 3', () => {
    expect(encode("i")).toBe("3");
  })

  test('testar se vogal "o" é convertida em 4', () => {
    expect(encode("o")).toBe("4");
  })

  test('testar se vogal "u" é convertida em 5', () => {
    expect(encode("u")).toBe("5");
  })

  test('testar se as strings retornadas tem o mesmo tamanho da original', () => {
    expect(encode('augusto').length).toBe(7);
  })

});

describe('A função decode', () => {
  
  test('testar se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  test('testar se "1" é convertido em "a"', () => {
    expect(decode("1")).toBe("a");
  });

  test('testar se "2" é convertido em "e"', () => {
    expect(decode("2")).toBe("e");
  });

  test('testar se "3" é convertido em "i"', () => {
    expect(decode("3")).toBe("i");
  });

  test('testar se "4" é convertido em "o"', () => {
    expect(decode("4")).toBe("o");
  });

  test('testar se "5" é convertido em "u"', () => {
    expect(decode("5")).toBe("u");
  });

  test('testar se a string retornada tem o mesmo tamanho da original', () => {
    expect(decode('ot1v34').length).toBe(6);
  })

});
