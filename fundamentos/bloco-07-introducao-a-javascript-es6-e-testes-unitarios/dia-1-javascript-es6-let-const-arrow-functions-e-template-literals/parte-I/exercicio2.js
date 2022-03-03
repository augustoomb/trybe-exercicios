const oddsAndEvens = [13, 3, 4, 10, 7, 2];

/* Faça uma função que retorne o array oddsAndEvens em ordem crescente.*/


//Como funciona na prática a função que será passada dentro de 'sort':
/*function(a,b) {
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
}*/


//Resolvendo com função em formato tradicional
/*function orderOddsAndEvens(arr) {
    return arr.sort(function(a, b){return a - b});
}*/

//Resolvendo com arrow function
const orderOddsAndEvens = arr => arr.sort(function(a, b){return a - b});

//Mostrando o resultado
console.log(orderOddsAndEvens(oddsAndEvens)); 