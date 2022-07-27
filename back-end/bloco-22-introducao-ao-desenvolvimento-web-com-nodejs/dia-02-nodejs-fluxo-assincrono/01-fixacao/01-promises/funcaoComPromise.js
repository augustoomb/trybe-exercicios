function calcularDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {

    // DIZENDO O QUE FAZER SE USUARIO DIGITAR 0 - (REJECT)
    if (num2 == 0) {
      reject(new Error("Não pode haver divisão por 0!"));
    }
    // SE NÃO CAIR NO CASO DO REJECT, CONTINUA ...

    // ... E FAÇO A PARTE DO RESOLVE
    const resultado = num1 / num2;
    resolve(resultado)
  });


  // E POR FIM: A FUNÇAO NÃO VAI RETORNAR UM RESULTADO DIRETO COMO UMA FUNÇÃO NORMAL...
  // ... ELA VAI RETORNAR UMA PROMISE
  // E ESSA PROMISE VAI PRECISAR SER RESOLVIDA POR QUEM CHAMAR ESSA FUNÇÃO
  return promise;

}


// O RESULT ABAIXO (NO THEN) É O RESULTADO SENDO DEVOLVIDO NO RESOLVE ALI EM CIMA
calcularDivisao(2, 0)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));



//INICIANDO A EXPLICAÇÃO AQUI:

/*UMA PROMISE, AO TERMINAR DE EXECUTAR, PODE SER SUCESSO OU FALHA.

O CASO DE SUCESSO É TRATADO PELO RESOLVE

O CASO DE FALHA É TRATADO PELO REJECT

O QUE ESTOU FAZENDO É INJETANDO ALGO DENTRO DA PROMISE( resolve e reject)
QUE SERÁ DEVOLVIDO A QUEM CHAMAR ESSA PROMISE

*/

