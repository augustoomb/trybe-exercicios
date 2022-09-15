class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string, notasProva: number[], notasTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = notasProva;
    this._notasTrabalho = notasTrabalho;
  }

  private somadorDeNotas(arrNotas: number[]): number {
    let soma = 0;

    arrNotas.forEach(nota => {
      soma = soma + nota;
    })

    return soma;
  }

  public somarNotas() {
    return this.somadorDeNotas(this._notasProva) + this.somadorDeNotas(this._notasTrabalho);
  }
}

const estudante1 = new Estudante(
  '8540-PO', 'Augusto', [100, 85, 60, 70], [40, 20, 30, 10],
)

console.log(estudante1.somarNotas());