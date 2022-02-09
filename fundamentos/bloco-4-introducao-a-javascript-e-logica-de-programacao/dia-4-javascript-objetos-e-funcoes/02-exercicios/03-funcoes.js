/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor. */

function calcularMenorValor(arrNumeros){

    let menorValor = arrNumeros[0]

    for(let i=0; i<arrNumeros.length; i+=1){
        if(arrNumeros[i]<menorValor){
            menorValor = arrNumeros[i]
        }
    }

    return arrNumeros.indexOf(menorValor);
}

console.log(calcularMenorValor( [2, 4, 6, 7, 10, 0, -3] ))