/* Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

function verificarPalavraPalindromo(palavra){
    let palavraFatiada = palavra.split("");
    let palavraInvertida = palavraFatiada.reverse(palavraFatiada);
    let palavraInvertidaUnida = palavraInvertida.join("");

    if(palavraInvertidaUnida == palavra){
        return true;
    }
    else{
        return false;
    }
}

console.log(verificarPalavraPalindromo("desenvolvimento"));