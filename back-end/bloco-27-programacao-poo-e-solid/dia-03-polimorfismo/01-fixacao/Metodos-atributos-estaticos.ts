// métodos e atributos estáticos: não acessam nada relacionado a objetos(instancias)
// são sempre relacionados a propria classe
// ṕosso criar um contador que vai incrementando a cada chamada da classe
// e o valor desse contador fica na propria classe
// posso usar tbm uma classe abstrata + metodo estatico para criar uma classe util
// sem precisar instanciar e posso usar seus métodos
class Employee {
  private static employeeCount = 0
  constructor(public name: string) {
    Employee.addEmployee();
  }
  private static addEmployee() {
    this.employeeCount += 1;
  }
  static get employees() {
    return this.employeeCount;
  }
}
console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);
/*
Saída:
0
1
2
*/