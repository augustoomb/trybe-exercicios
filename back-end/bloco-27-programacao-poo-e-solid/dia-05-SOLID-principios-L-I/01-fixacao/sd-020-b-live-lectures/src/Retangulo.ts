class Paralelograma {
  constructor(
    private _altura: number,
    private _largura: number,
  ) { }

  public calcularArea(): number {
    return this._altura * this._largura;
  }
}

class Retangulo extends Paralelograma {}

class Quadrado extends Paralelograma {
  constructor(altura: number, largura: number) {
    super(altura, largura);
    if (altura !== largura) {
      throw new Error('Quadrados possuem lados iguais')
    }
  }
}

const calcularArea = (retangulo: Paralelograma) => retangulo.calcularArea();

const quadrado = new Quadrado(2, 2);
const retangulo = new Retangulo(2, 5);
console.log(calcularArea(quadrado));
console.log(calcularArea(retangulo));