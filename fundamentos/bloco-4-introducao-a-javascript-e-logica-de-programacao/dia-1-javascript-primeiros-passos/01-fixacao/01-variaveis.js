//Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
const myName = "Augusto"

//Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
const birthCity = "Belo Horizonte"

//Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
var birthYear = 1988

//Utilize o console.log() para imprimir as constantes e variáveis que você criou.
console.log(myName)
console.log(birthCity)
console.log(birthYear)

/*Altere o valor atribuído à variável birthYear para 2030. 
Faça um console.log(birthYear) novamente para ver o que acontece!*/

birthYear = 2030
console.log("birthYear alterada: " + birthYear)

/*Altere o valor atribuído à constante birthCity . 
Faça um console.log(birthCity) novamente! 
Você saberia explicar por que recebemos uma mensagem de erro? */
//birthCity = "São Paulo"
console.log(birthCity)
console.log("R: " + "birthCity é uma constante. Uma vez atribuído valor não pode ser modificado")
