export default class ItemPedido {
  private _nomePedido: string;
  private _preco: number;
  
  constructor(nomePedido: string, preco: number) {
    this._nomePedido = nomePedido;
    this._preco = preco;
  }

  get nomePedido(): string {
    return this._nomePedido;
  }

  get preco(): number {
    return this._preco;
  }
}