export default class Celular {
  constructor(private _marca: string, private _numero: string) { }

  public ligarPara(numero: string): void {
    console.log(`${this._numero} ligando para ${numero}`);
  }

  get numero(): string {
    return this._numero;
  }
}