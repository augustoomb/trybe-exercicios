import Matriculavel from "./Matriculavel.interface";
import Pessoa from "./Pessoa.class";

export default class Funcionario extends Pessoa implements Matriculavel {
  private _idMatricula: number;
  private _salario: number;
  private _dataDeAdmissao: Date;

  constructor(nome: string, dataNasc: Date, salario: number) {
    super(nome, dataNasc);
    this._salario = salario;
    this._idMatricula = this.gerarIdMatricula();
  }

  gerarIdMatricula():number {
    return Date.now(); // uma forma(pouco segura) de criar um id diferente a cada chamada
  }
  
  get idMatricula():number {
    return this._idMatricula;
  }
}
