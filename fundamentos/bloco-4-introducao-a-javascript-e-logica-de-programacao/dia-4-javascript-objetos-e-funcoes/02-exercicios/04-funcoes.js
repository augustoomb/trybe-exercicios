/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. */

function calcularMaiorPalavra(arrNomes){

    let tamanhoDaMaiorPalavra = arrNomes[0].length
    let maiorPalavra = arrNomes[0]
    
    for(let i=0; i<arrNomes.length; i+=1){
        if(arrNomes[i].length > tamanhoDaMaiorPalavra){
            tamanhoDaMaiorPalavra = arrNomes[i].length
            maiorPalavra = arrNomes[i]
        }
    }

    return maiorPalavra

}


console.log(   calcularMaiorPalavra(  ['José', 'Lucas', 'Nádia', 'Fernanda','Cairo', 'Joana']  )    );