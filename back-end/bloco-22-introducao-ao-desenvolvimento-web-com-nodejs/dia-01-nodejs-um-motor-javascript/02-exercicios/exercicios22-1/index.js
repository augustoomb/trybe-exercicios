// const scripts = [
//   './imc.js', './velocidade.js', './sorteio.js'
// ]

const readLine = require('readline-sync');

const escolha = () => {
  return readLine.questionInt(
    "Escolha um script para executar:",
    "1 - IMC",
    "2 - Velocidade média",
    "3 - Sorteio de números",
  )
}

const escolherScript = () => {
  const opcaoEscolhida = escolha();
  switch (opcaoEscolhida) {
    case 1:
      require('./imc').main()
      break;
    case 2:
      require('./velocidade').main()
      break;
    case 3:
      require('./sorteio').main();
      break;
  }
}

function main() {
  escolherScript();
}

main();