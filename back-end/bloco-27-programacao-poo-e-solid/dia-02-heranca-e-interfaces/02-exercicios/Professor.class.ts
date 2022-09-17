import Disciplina from "./Disciplina.class";
import Funcionario from "./Funcionario.interface";
import Pessoa from "./Pessoa.class";

class Professor extends Pessoa implements Funcionario{
  public _registro: number;  
  public _salario: number;
  public _dataDeAdmissao: Date;

  constructor(nome: string, dataNasc: Date, salario: number, disciplina: Disciplina) {
    super(nome, dataNasc);

    this._salario = salario;
  }

  gerarRegistroUnico(): number {
    return Date.now();
  }
}