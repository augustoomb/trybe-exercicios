export default abstract class Pessoa {
  protected _nome: string;
  protected _dataNasc: Date;

  constructor(nome: string, dataNasc: Date) {
    if (this.validarNome(nome) && this.validarDataDeNascimento(dataNasc)) {
      this._nome = nome;
      this._dataNasc = dataNasc;
    } else {
      throw new Error("Dados inválidos"); 
    }    
  }

  get nome(): string {
    return this._nome;
  }

  get dataNasc(): Date {
    return this._dataNasc;
  }

  set nome(nome: string) {
    if (this.validarNome(nome)) {
      this._nome = nome;
    } else {
      throw new Error("Nome inválido"); 
    }    
  }

  set dataNasc(dataNasc: Date) {
    if (this.validarDataDeNascimento(dataNasc)) {
      this._dataNasc = dataNasc;
    } else {
      throw new Error("Data de nascimento inválida"); 
    } 
  }

  private validarNome(nome: string) {
    return nome.length > 2;
  }

  private validarDataDeNascimento(dataNasc: Date) {
    return dataNasc.getTime() <= Date.now();
  }
}

// try {
//   const pessoa1 = new Pessoa('augusto', new Date(1988,1,14));
//   pessoa1.nome = '1';
// } catch (error:any) {
//   console.log(error.message);
// }