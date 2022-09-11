// REVISÃO:

// ARRAY DE TIPOS PRIMITIVOS
let names: string[] = ["augusto", "barbosa"]

// TUPLAS
let infos: [string, number] = ["augusto", 34]

// TYPE ALIASES (TIPOS)
type user = {
  name: string,
  idade: number
}

function imprimirNome(usr: user):void {
  console.log(`O nome do usuário é ${ usr.name }`)
}

// TYPE UNIONS (permite dois tipo de dados usando | pipe )
type car = {
  model: string | number,
  year: number
}

function imprimirCarro(c: car):void {
  console.log(`O modelo do carro é ${ c.model }`)
}

// ENUMS
enum EyeColor {
  black = "preto",
  yellow = "amarelo"
}



// CLASSES
class Person {
  name: string;
  birthDate?: Date; // o birthDate vira um atributo opcional
  eyeColor: EyeColor;

  constructor(name: string, eyeColor: EyeColor, birthDate?: Date) { // o birthDate vira um atributo opcional
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor  = eyeColor;
  }

  speak(): void {
    console.log(`${ this.name } está falando!`)
  }
}

const person1 = new Person("Augusto", EyeColor.black, new Date("1988-01-14"))
person1.speak();
person1.name = "Agora é outro nome!";



// INTERFACES (similar ao type)
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  }
}

employee.firstName = "augusto";


  // ----

interface Teacher extends Employee {
  // firstName: string;
  // lastName: string;
  subject: string;
  // fullName(): string;
  sayHello(): string;
}



// GENERICS - posso usar varios de uma vez (não só 1 T como no ex)
function getArray<T>(items: T[]) : T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);