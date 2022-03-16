/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */

function calcularMaiorValor(arrNumeros){
    let maiorElemento = Math.max(...arrNumeros) //operador spread

    let indiceDoMaiorElemento = arrNumeros.indexOf(maiorElemento)

    return indiceDoMaiorElemento
}


console.log(calcularMaiorValor(  [2, 4, 6, 7, 10, 0, -3] ))


/*

EXEMPLO SIMPLES DO OPERADOR SPREAD (...)

Consigo percorrer todo o array com menos código

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6


*/