/*  Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
Dica: use parâmetro rest . */

const sum = (...numeros) => {

    const somador = (acum, valorAtual) => {
        return acum + valorAtual;
    }
    
    return totalDaSoma = numeros.reduce(somador, 0);
}

console.log(sum(1,2,3));