/*
Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado.
O script deve ser executado através do comando npm run sorteio.
Utilize o readline-sync para realizar input de dados.
Armazene o script em sorteio.js.
O número gerado deve ser um inteiro entre 0 e 10.
Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez.
O número era [número sorteado]".
Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.
*/

const readLine = require('readline-sync');

const capturarNumUsuario = () => {
  return readLine.questionInt('Digite um num inteiro de 0 a 10: ');
}

const sortearNumAleatorio = () => {
  return Math.floor(Math.random() * 11);
}

const resultado = (num1, num2) => { // compara num sorteado com num apostado pelo usuário
  if (num1 !== num2) {
    return `Opa, não foi dessa vez. O número era ${num2}`;
  } else {
    return "Parabéns, número correto!";
  }
}

const jogarNovamente = () => {
  return readLine.question('Deseja jogar novamente? (s ou n)');
}

const rotinaDoJogo = () => {
  const numUsuario = capturarNumUsuario();
  const numSorteado = sortearNumAleatorio();
  console.log(resultado(numUsuario, numSorteado));
  if (jogarNovamente() === 's') {
    rotinaDoJogo();
  }
}

function main() {
  rotinaDoJogo();
}

main();