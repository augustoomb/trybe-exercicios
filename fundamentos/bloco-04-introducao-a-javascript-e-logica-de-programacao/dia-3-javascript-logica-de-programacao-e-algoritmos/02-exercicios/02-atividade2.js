/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
Por exemplo, a palavra "banana" seria invertida para "ananab". 
Utilize a string abaixo como exemplo, depois troque por outras para
verificar se seu algoritmo está funcionando corretamente. 

let word = 'tryber';

*/

/*

-Dividir toda a string com o split(). Isso faz com que todas as letras formem um array
-Inverter letras com o reverse()
-Juntar novamente com o join()

*/

let word = "Augusto"

let palavraInvertida = word.split("").reverse().join("")

console.log(palavraInvertida)