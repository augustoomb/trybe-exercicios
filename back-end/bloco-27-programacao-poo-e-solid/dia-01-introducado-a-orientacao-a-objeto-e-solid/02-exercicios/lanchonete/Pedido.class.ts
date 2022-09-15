import Cliente from './Cliente.class';
import ItemPedido from './ItemPedido.class';

export default class Pedido {
  private _cliente: Cliente;
  private _itensConsumidos: ItemPedido[];
  private _formaPagamento: string;
  private _desconto: number;

  constructor(cliente: Cliente, itensConsumidos: ItemPedido[], formaPagamento: string, desconto:number) {
    this._cliente = cliente;
    this._itensConsumidos = itensConsumidos;
    this._formaPagamento = formaPagamento;
    this._desconto = desconto;
  }

  calcularTotalDoPedido() {
    let total = 0;

    this._itensConsumidos.forEach(item => {
      total = total + item.preco;
    })

    return total;
  }

  calcularTotalDoPedidoComDesconto() {
    return this.calcularTotalDoPedido() - (this.calcularTotalDoPedido() * this._desconto);
  }
}