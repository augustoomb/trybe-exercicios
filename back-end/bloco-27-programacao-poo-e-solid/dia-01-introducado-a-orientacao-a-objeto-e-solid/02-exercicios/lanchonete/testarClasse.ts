import Cliente from './Cliente.class';
import ItemPedido from './ItemPedido.class';
import Pedido from './Pedido.class';

const cliente1 = new Cliente('Augusto');

const itemPedido1 = new ItemPedido('Hamburguer Simples', 30);
const itemPedido2 = new ItemPedido('Coca-cola', 10);
const itemPedido3 = new ItemPedido('Batata grande', 15);

const pedido1 = new Pedido(cliente1, [itemPedido1, itemPedido2, itemPedido3], 'dinheiro', 0.1);

console.log(`O valor total do pedido sem desconto é: ${pedido1.calcularTotalDoPedido()}`)
console.log(`O valor total do pedido com desconto é: ${pedido1.calcularTotalDoPedidoComDesconto()}`)