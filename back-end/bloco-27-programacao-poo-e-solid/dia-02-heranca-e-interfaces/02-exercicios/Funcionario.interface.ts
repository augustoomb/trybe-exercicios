export default interface Funcionario {
  _registro: number;
  _salario: number;
  _dataDeAdmissao: Date;

  gerarRegistroUnico(): number;
}
