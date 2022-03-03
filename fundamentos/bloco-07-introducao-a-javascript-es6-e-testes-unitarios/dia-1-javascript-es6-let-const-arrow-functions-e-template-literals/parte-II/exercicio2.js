/* Crie uma função que receba uma frase e retorne qual a maior palavra.
ex:      longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu' */

const maiorPalavra = frase => {
    let arrayPalavras = frase.split(' ');
    let maiorPalavra = arrayPalavras[0];

    for(let i=0; i<arrayPalavras.length; i+=1){
        if(arrayPalavras[i].length > maiorPalavra.length){
            maiorPalavra = arrayPalavras[i]
        }        
    }

    console.log(maiorPalavra);
}



maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu");