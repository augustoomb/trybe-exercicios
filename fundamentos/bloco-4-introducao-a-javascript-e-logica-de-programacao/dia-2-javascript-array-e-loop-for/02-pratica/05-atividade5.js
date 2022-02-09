/* Utilizando for , descubra qual o maior valor contido no array e imprima-o */

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for(let i=0; i<numbers.length; i+=1){
    if(numbers[i] > maiorValor){
        maiorValor = numbers[i]
    }
}

console.log(maiorValor)*/

const n = 9

let resultado = 100

for (let i = 0; i <= n; i+=1) {
    resultado -= i;    
}

console.log(resultado);