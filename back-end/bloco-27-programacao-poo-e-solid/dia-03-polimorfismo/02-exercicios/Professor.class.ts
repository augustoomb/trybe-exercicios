import Disciplina from "./Disciplina.class";
import Funcionario from "./Funcionario.class";

export default class Professor extends Funcionario{
  public _disciplina: Disciplina;  

  constructor(nome: string, dataNasc: Date, salario: number, disciplina: Disciplina) {
    super(nome, dataNasc, salario);;

    this._disciplina = disciplina;
  }

  gerarRegistroUnico(): number {
    return Date.now();
  }
}