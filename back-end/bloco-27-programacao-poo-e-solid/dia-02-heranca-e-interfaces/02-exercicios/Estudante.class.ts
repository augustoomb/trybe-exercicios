import Pessoa from './Pessoa.class';

class Estudante extends Pessoa{
  private _matricula: number;
  private _notasProvas: number[] = [];
  private _notasTrabalhos: number[] = [];

  constructor(
    nome: string,
    birthDate: Date,
  ) { 
    super(nome, birthDate )
    this._matricula = this.geradorDeMatricula();
  }

  private geradorDeMatricula() {
    return Date.now(); // uma forma(pouco segura) de criar um id diferente a cada chamada
  }

  private somadorDeNotas(arrNotas:number[]):number {
    if (arrNotas.length === 0) {
      return 0;
    } else {
      return arrNotas.reduce((acc, nota) => acc + nota);
    };    
  }

  private testarTamanhoArr(tamanhoMax: number, arr: number[]): boolean {
    return arr.length <= tamanhoMax;
  }

  somarTotalDasNotas():number {
    return this.somadorDeNotas(this._notasProvas) + this.somadorDeNotas(this._notasTrabalhos);
  }

  calculaMediaDasNotas():number {
    return this.somarTotalDasNotas() / (this._notasProvas.length + this._notasTrabalhos.length)
  }

  getInfos(): string {
    return `Os dados iniciais do estudando:
    Nome: ${this._nome},
    Data de Nascimento: ${this._birthDate}
    Matrícula: ${this._matricula}`
  }

  set notasProvas(arrNotas:number[]) {
    if (this.testarTamanhoArr(4, arrNotas)) {
      this._notasProvas = arrNotas;
    }else {
      throw new Error("São permitidas apenas 4 notas de provas"); 
    } 
  }

  set notasTrabalhos(arrNotas:number[]) {
    if (this.testarTamanhoArr(2, arrNotas)) {
      this._notasTrabalhos = arrNotas;
    }else {
      throw new Error("São permitidas apenas 2 notas de trabalhos"); 
    } 
  }
  
}

try {
  const estudante1 = new Estudante('Augusto', new Date(1988,0,14));
  estudante1.notasProvas = [10, 50, 60, 90];
  estudante1.notasTrabalhos = [60, 10];
  console.log(estudante1.somarTotalDasNotas());
  console.log(estudante1.calculaMediaDasNotas().toFixed(2));
} catch (error:any) {
  console.log(error.message)
}


/*
class Estudante {

  constructor(
    private _matricula: string,
    private _nome: string,
    private _notasProvas: number[],
    private _notasTrabalhos: number[],
  ) {}

  private somadorDeNotas(arrNotas:number[]):number {
    return arrNotas.reduce((acc, nota) => acc + nota)
  }

  somarTotalDasNotas():number {
    return this.somadorDeNotas(this._notasProvas) + this.somadorDeNotas(this._notasTrabalhos);
  }

  calculaMediaDasNotas():number {
    return this.somarTotalDasNotas() / (this._notasProvas.length + this._notasTrabalhos.length)
  }
}

const estudante1 = new Estudante('48765-1', 'Augusto', [80,40,20], [50,60,80]);

console.log(estudante1.somarTotalDasNotas());
console.log(estudante1.calculaMediaDasNotas());

*/