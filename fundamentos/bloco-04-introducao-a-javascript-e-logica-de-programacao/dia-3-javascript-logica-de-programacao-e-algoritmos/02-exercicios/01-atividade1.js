/* O fatorial é a multiplicação de um número natural pelos seus antecessores,
 exceto o zero. Por exemplo: 
 
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24

 */

let fat = 1;

for(let i=10; i>=1; i-=1){
    fat *= i  //fat = fat*i
}

console.log(fat)