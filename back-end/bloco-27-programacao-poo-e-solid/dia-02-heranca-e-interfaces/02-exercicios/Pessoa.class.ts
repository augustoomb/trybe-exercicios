export default class Pessoa {
  protected _nome: string;
  protected _birthDate: Date;

  constructor(nome: string, birthDate: Date) {
    if (this.validarNome(nome) && this.validarDataDeNascimento(birthDate)) {
      this._nome = nome;
      this._birthDate = birthDate;
    } else {
      throw new Error("Dados inválidos"); 
    }    
  }

  get nome(): string {
    return this._nome;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set nome(nome: string) {
    if (this.validarNome(nome)) {
      this._nome = nome;
    } else {
      throw new Error("Nome inválido"); 
    }    
  }

  set birthDate(birthDate: Date) {
    if (this.validarDataDeNascimento(birthDate)) {
      this._birthDate = birthDate;
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