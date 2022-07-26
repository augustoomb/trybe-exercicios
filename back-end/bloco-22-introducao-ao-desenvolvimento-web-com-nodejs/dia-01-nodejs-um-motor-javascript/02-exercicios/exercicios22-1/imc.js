const readline = require('readline-sync');


function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);

  return imc;
}

const IMC_MAXIMO_E_MINIMO_POR_SITUACAO = {
  'Abaixo do peso (magreza)': {
    imcMinimo: 0, // Um valor default mínimo qualquer, impossível de alcançar no imc.
    imcMaximo: 18.4,
  },
  'Peso normal': {
    imcMinimo: 18.5,
    imcMaximo: 24.9,
  },
  'Acima do peso (sobrepeso)': {
    imcMinimo: 25,
    imcMaximo: 29.9,
  },
  'Obesidade grau I': {
    imcMinimo: 30.0,
    imcMaximo: 34.9,
  },
  'Obesidade grau II': {
    imcMinimo: 35,
    imcMaximo: 39.9,
  },
  'Obesidade graus III e IV': {
    imcMinimo: 40,
    imcMaximo: 100 // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

function main() {
  const imc = calculaImc(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);

  console.log(`IMC: ${imc.toFixed(2)}`);
}




// ----------------------------------------------


// const readLine = require('readline-sync');

// const peso = readLine.questionFloat("Qual seu peso?");
// const altura = readLine.questionFloat("Qual sua altura?");

// const imc = peso / (altura * altura);
// const classificacao = 0;

// // switch (imc) {
// //   case imc < 18.5:
// //     classificacao = "Abaixo do peso (magreza)"
// //     break;
// //   case imc >= 18.5 && imc <= 24.9:
// //     classificacao = "Peso normal"
// //     break;
// //   case imc >= 25 && imc <= 29.9:
// //     classificacao = "Acima do peso (sobrepeso)"
// //     break;
// //   case imc >= 30 && imc <= 34.9:
// //     classificacao = "Obesidade grau I"
// //     break;
// //   case imc >= 35 && imc <= 39.9:
// //     classificacao = "Obesidade grau II"
// //     break;
// //   case imc >= 40:
// //     classificacao = "Obesidade grau III e IV"
// //     break;
// //   // default:
// //   //   console.log("Não foi possível calcular o peso corretamente!")
// // }

// console.log(`Seu IMC é de: ${imc}. Sua classificação é: ${classificacao}`);