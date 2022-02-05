/* 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. */

let maiorNumeroPrimo=1  //1 é primo e menor numero primo do conjunto. Bom começar com ele.


for(let i=50; i>=2; i-=1){ //rodar um laço para percorrer todos os numeros do intervalo. Posso evitar o 1, pois já tenho ele acima.

    let ehPrimo = true //a cada iteração do i, atribuo true a essa variável

    for(let j=i; j>=2; j-=1){ //a cada iteração do i, vou rodar todos os numeros menores que ele, iniciando no mesmo numero do i, até chegar no 2 (decrescendo)
        if(i!=j && i%j==0){ //Excluo a divisão do numero por ele mesmo. quero saber se o i e j formam uma divisão exata. 
            ehPrimo = false  // se acontecer uma divisão exata, sei q o numero não é primo
        }
    }

    if(ehPrimo && i > maiorNumeroPrimo){  //depois de dividir o i por todos os numeros, sei se ele é primo ou não. Preciso também se ele é maior do que o ultimo primo achado
        maiorNumeroPrimo = i      // se for, agora o maior primo será ele.
    }

}

console.log(maiorNumeroPrimo)  //mostrando o maior primo encontrado.