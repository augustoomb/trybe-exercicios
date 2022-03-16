/*
Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

Escreva dois algoritmos: um que retorne a maior palavra deste 
array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
*/

//maior palavra
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0]

for(let i=0; i<array.length; i+=1){
    if(array[i].length > maiorPalavra.length){
        maiorPalavra = array[i]
    }
}

console.log("A maior palavra é: "+maiorPalavra)

/* ******************/

//menor palavra
//let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0]

for(let i=0; i <array.length; i+=1){
    if(array[i].length < menorPalavra.length){
        menorPalavra = array[i]
    }
}

console.log("A menor palavra é: "+menorPalavra)