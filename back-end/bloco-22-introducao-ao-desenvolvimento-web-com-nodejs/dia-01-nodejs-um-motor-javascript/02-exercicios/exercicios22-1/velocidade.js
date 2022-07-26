/*
Crie um script para calcular a velocidade média de um carro numa corrida.
A fórmula para calcular velocidade média é distância / tempo.
Armazene o script no arquivo velocidade.js.
Agora, permita que o script seja executado através do comando npm run velocidade.
Para isso, crie a chave velocidade dentro do objeto scripts no package.json.
Utilize o readline-sync para solicitar os dados à pessoa.
Considere a distância em metros e o tempo em segundos.
Repare que, agora, estamos trabalhando com números inteiros.
*/

const readLine = require('readline-sync');

capturarDados = () => {
  return {
    distancia: readLine.questionInt("Digite a distância percorrida"),
    tempo: readLine.questionInt("Digite o tempo gasto")
  }
}

calcularVelocidadeMedia = (distancia, tempo) => {
  return distancia / tempo;
}

function main() {
  const { distancia, tempo } = capturarDados();
  console.log(`A velocidade média é de ${calcularVelocidadeMedia(distancia, tempo)} m/s`);
}

main();