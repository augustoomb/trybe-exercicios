const fatorial = num => {
    let resultado = 1;
    for(let i=1; i<=num; i+=1){
        resultado = resultado*i;
    }
    console.log(resultado);
}

fatorial(5);


/* dica recursiva do gabarito: */

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));