/* Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles
 sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem 
 ser removidas e transformadas em parâmetros das funções. */

/* 
1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b ,
 definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)

2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo,
 "negative" se for negativo e "zero" caso contrário.

5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.

*/

/* ***********1********** */

function somar(a,b){
    return a+b;
}

function subtrair(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a/b;
}

function modulo(a,b){
    return a%b;
}


/* ***********2********** */

function maiorNumero(a,b){
    if(a>b) {
        return a;
    }else if(b>a){
        return b;
    }
    //não usei só else pois os numeros podem ser iguais. Nesse caso não retornei nada porque não foi pedido
}

/* ***********3********** */

function maiorDeTres(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else if(c>a && c>b){
        return c;
    }
    //não usei só else pois os numeros podem ser iguais. Nesse caso não retornei nada porque não foi pedido
}

/* ***********4********** */

function positivoOuNegativo(a) {
    if(a>0){
        return "positive";
    }else if(a<0){
        return "negative";
    }else{
        return "zero";
    }
}


/* ***********5********** */

function triangulo(a,b,c){
    if(a<0 || b<0 || c<0){
        return "Erro, todo ângulo de um triângulo é maior que zero";
    }
    else{
        if(a+b+c == 180){
            return "É um tringulo";
        }
        else{
            return "Não é um triângulo";
        }
    }
}

console.log(somar(20,10))
console.log(subtrair(30,20))
console.log(multiplicar(5,10))
console.log(dividir(50,2))
console.log(modulo(5,2))


console.log(maiorNumero(50,100))


console.log(maiorDeTres(10,600,5))


console.log(positivoOuNegativo(50));


console.log(triangulo(20,60,100))