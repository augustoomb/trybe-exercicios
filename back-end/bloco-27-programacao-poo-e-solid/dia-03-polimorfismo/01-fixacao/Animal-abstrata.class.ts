// classe abstrata

abstract class Animal {
  // posso ter atributos abstract tbm (subclasses tbm serão obrigadas a implementar)
  constructor(public name: string) { } //construtor aqui serve para ser usado apenas pelas subclasses
  abstract move(): void // subclasses são obrigadas a implementar
  // o fato de eu poder também implementar aqui alguns metodos não abstratos
  // é o que difere uma classe abstrata de uma interface
}
class Bird extends Animal {
  move() { console.log(`${this.name} está voando.`); }
}
class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}
class Fish extends Animal {
  move() { console.log(`${this.name} está nadando.`); }
}
const a = new Fish('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');
const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);
/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/