/* 
Não preciso ficar chamando todas a funções e esperar retorno.
Basta eu simular o retorno. Ex: A funçãoA chama a funcaoB. Só preciso simular o resultado da B (mockar)
para testar a funçãoA. Não preciso chamar 'B' de fato, já que eu já sei o que B retorna.
*/

function retornaNumeroAleatorio () {
  return Math.floor(Math.random() * 100);
}

function divisivelPorDois () {
  return (retornaNumeroAleatorio() % 2) === 0
}

function somaDoisNumeros () {
  return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}


describe("Aprendendo sobre mocks", () => {
  it("Testa se a função foi chamada", () => {
    somaDoisNumeros = jest.fn(); // mockando a função (ou seja, simulando ela);
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalled();
  });

  it("Testa o resultado da função", () => {
    somaDoisNumeros = jest.fn().mockReturnValue(8); // digo o que a função que eu estou mockando vai retornar.

    /* existe tbm o mockReturnValueOnce, que posso usar no lugar do mockReturnValue
       a diferença é que o mockReturnValueOnce retorna o valor definido apenas uma vez, e 
       é importante, pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes.
    */
    
    expect(somaDoisNumeros()).toBe(8);
  });

  it("Testa quantas vezes a função foi chamada", () => {
    somaDoisNumeros = jest.fn();

    somaDoisNumeros();
    somaDoisNumeros();
    somaDoisNumeros();

    expect(somaDoisNumeros).toHaveBeenCalledTimes(3);
  });

  it("Testa retornar true quando o numero é par", () => {

    retornaNumeroAleatorio = jest.fn().mockReturnValue(4);
    
    expect(divisivelPorDois()).toBe(true);

  });

  it("Testa retornar false quando o numero é impar", () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(3);
    
    expect(divisivelPorDois()).toBe(false);
  });
});