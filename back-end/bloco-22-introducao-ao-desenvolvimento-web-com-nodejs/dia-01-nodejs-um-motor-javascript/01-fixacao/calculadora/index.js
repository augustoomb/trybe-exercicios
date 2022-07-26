const operations = require('./operacoes'); // IMPORTANDO O MÓDULO QUE EU CRIEI
const readLine = require('readline-sync'); // npm install readline-sync

console.log('Executando calculadora...');

const num1 = readLine.questionInt("Digite um número: ");
const oper = readLine.question("Digite a operação (+,-,*,/): ");
const num2 = readLine.questionInt("Digite um número: ");

switch (oper) {
  case "+":
    operations.sum(num1, num2)
    break;
  case "-":
    operations.sub(num1, num2)
    break;
  case "*":
    operations.mult(num1, num2)
    break;
  case "/":
    operations.div(num1, num2)
    break;
  default:
    console.log("Operação desconhecida!");
}