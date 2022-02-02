/* Escreva um programa que receba o nome de uma peça de xadrez
 e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com
letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas
as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

const peca = "TORRE";

switch(peca.toLowerCase()){
    case "peao":
        console.log("1 casa a frente na vertical")
        break

    case "bispo":
        console.log("Diagonal. Quantas casas quiser")
        break

    case "torre":
        console.log("Vertical e horizontal. Quantas casas quiser")
        break

    case "cavalo":
        console.log("Movimento em 'L' em qualquer direção")
        break

    case "rainha":
        console.log("Diagonal, vertical ou horizontal. Quantas casas quiser")
        break

    case "rei":
        console.log("Diagonal, vertical ou horizontal. Apenas uma casa")
        break

    default:
        console.log("Peça inválida")
}