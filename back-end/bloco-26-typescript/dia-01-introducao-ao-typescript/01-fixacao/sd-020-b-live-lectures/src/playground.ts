let nome: string = 'Andre';
let bool: boolean = true;
let number: number = 1;
let object: object = {};

nome = 'Baeta';

console.log(nome);
console.log(bool);
console.log(number);
console.log(object);


const mundoInvertido: boolean = process.env.BOOLEAN === `true`

console.log([mundoInvertido, true === mundoInvertido]);


const numbers: number[] = [1, 3, 4, 5];
const texts: (number | string | boolean)[] = ['andre', 'baeta', 1, true];
const text2: Array<number | string | boolean> = ['andre', 'baeta', 1, true];

enum HttpStatus {
  NOT_FOUND = 404,
  OK = 200,
  INTERNAL_ERROR = 500,
  CREATED = 201,
};

console.log(HttpStatus.OK);

enum Timer {
  SECOND = 1000,
  MINUTE = 1000 * 60,
  HOUR = 1000 * 60 * 60,
  DAY = 1000 * 60 * 60 * 24,
} 

console.log(new Date(Date.now() + (Timer.DAY * 30)));


const person = { name: 'andre', age: 15 };

function excludeProperty(prop): void {
  delete person[prop];
}

console.log(excludeProperty('age'))
console.log(person);

function soma(a: number, b: number): void {
  console.log(a + b)
}

soma(1, 2);
soma(1, 2);


class Calculadora {
  public soma(a: number, b: number ): number {
    this.sub(a, b)
    return a + b
  }

  public div(a: number, b: number): void {
    console.log(a / b)
  }

  public mult(a: number, b: number): string {
    return `O resultado de ${a} x ${b} = ${a * b}`
  }

  private sub(a, b) {
    console.log(a * b);
  }
}

const calc = new Calculadora();
const calc2 = new Calculadora();
const calc3 = new Calculadora();

console.log(calc.soma(5, 5))
calc.div(5, 5)
calc.div(5, 5)
console.log(calc.mult(5, 5))

console.log(`Exemplo com Classe`);
console.log(calc2.soma(2, 5))




// res.status(HttpStatus.OK).json({})
// res.status(HttpStatus.CREATED).json({})
// res.status(HttpStatus.NOT_FOUND).json({})
// res.status(500).json({})

