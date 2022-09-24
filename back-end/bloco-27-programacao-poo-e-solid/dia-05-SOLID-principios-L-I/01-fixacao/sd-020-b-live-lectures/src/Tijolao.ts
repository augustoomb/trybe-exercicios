import Celular from './Celular';

export default class Tijolao extends Celular {
  arremessar(local: string): void {
    console.log(`Você arremessou o tijolão em ${local}! Cuidado!`);
  }
}