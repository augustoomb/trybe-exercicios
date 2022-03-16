/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. */

function calcularNumComMaisRepeticao(arrNumeros){
    let arrayNumerosOrdenados =  arrNumeros.sort(compararNumeros)
    let ElementoQueMaisSeRepete = arrNumeros[0]

    for(let i=0; i<arrNumeros.lenght; i+=1){
        if()
    }
}

function compararNumeros(a,b) {
    return a - b;
}




//console.log(  calcularNumComMaisRepeticao(  [2, 3, 2, 5, 8, 2, 3]  )   );




//local onde peguei as dicas/explicação sobre o passar a função de comparar numeros como parâmetro do sort()
//https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a#:~:text=Para%20classificar%20um%20array%20de,scores%20numericamente%20em%20ordem%20crescente.