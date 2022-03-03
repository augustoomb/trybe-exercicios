/* Um array com escopo global, que é o escopo do arquivo JS , 
nesse caso, contendo cinco strings com suas principais skills . */
const arrayGlobal = ['Javascript', 'html', 'css', 'git', 'github'];

/* Escreva uma função que vai receber uma string como parâmetro. 
Sua função deverá procurar pela letra x em uma string qualquer que você determinar 
e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string  */
const substituirLetraX = str => {
    let stringDeterminada = 'Tryber x aqui!';
    let arrayStringDeterminada = stringDeterminada.split(' ');

    for(let i=0; i<arrayStringDeterminada.length; i+=1){
        if(arrayStringDeterminada[i] == 'x'){
            arrayStringDeterminada[i] = str;
        }
    }

    console.log(arrayStringDeterminada.join(' '));
}

let retornoFuncaoX = substituirLetraX("Bebeto");

