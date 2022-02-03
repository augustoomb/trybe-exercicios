/* Utilizando o array criado no exercício anterior imprima o resultado
 da divisão de cada um dos elementos por 2 . */

 let arrayNumeros = []

for(let i=1; i<=25; i+=1){
    arrayNumeros.push(i)
}

for(let i=0; i<arrayNumeros.length; i+=1){
    console.log(arrayNumeros[i] / 2)
}