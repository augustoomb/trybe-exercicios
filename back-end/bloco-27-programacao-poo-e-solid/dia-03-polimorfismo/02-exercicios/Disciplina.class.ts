export default class Disciplina {
  private _nomeDisciplina: string;

  constructor(nomeDisciplina: string) {
    if (this.validarNomeDisciplina(nomeDisciplina)) {
      this._nomeDisciplina = nomeDisciplina;
    } else {
      throw new Error("Nome de disciplina inválido")
    }    
  }

  get nomeDisciplina() {
    return this._nomeDisciplina;
  }

  set nomeDisciplina(nomeDisciplina: string) {
    if (this.validarNomeDisciplina(nomeDisciplina)) {
      this._nomeDisciplina = nomeDisciplina;
    } else {
      throw new Error("Nome de disciplina inválido")
    }  
  }

  validarNomeDisciplina(nomeDisciplina: string) {
    return nomeDisciplina.length > 2;
  }
}

try {
  const matematica = new Disciplina('ab');
  console.log(matematica.nomeDisciplina);
} catch (error:any) {
  console.log(error.message)
}