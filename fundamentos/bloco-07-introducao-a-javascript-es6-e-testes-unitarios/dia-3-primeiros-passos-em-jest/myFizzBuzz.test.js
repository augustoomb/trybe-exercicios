const myFizzBuzz = require('./myFizzBuzz');

describe('A função myFizzBuzz', () => {

  //Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  test('testa se a chamada myFizzBuzz(15) retorna "fizzbuzz" ', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  //Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  test('testa se a chamada myFizzBuzz(9) retorna "fizz" ', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })

  //Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  test('testa se a chamada myFizzBuzz(10) retorna "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })

  //Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  test('testa se a chamada myFizzBuzz(7) retorna 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  //Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  test('testa se a chamada myFizzBuzz("a") retorna false', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
    //expect(myFizzBuzz('a')).toBe(false);
  })

})

