/* Crie uma função que receba um número natural (número inteiro não negativo) 
N e retorne o somatório de todos os números de 1 até N. */

function somatorio(n){
    let soma = 0;

    for(let i=1; i<=n; i+=1){
        soma = soma + i;
    }

    return soma;
}

console.log(somatorio(10));