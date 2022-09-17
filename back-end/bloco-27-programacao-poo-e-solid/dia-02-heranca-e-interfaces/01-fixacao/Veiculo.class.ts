class Veiculo {
  constructor(public marca:string, public nome: string, public ano: number) {}

  acelerar() {
    console.log(`${ this.nome } acelerou`);
  }
}

// const veiculo1 = new Veiculo('Fiat', 'Pálio', 2000);

// veiculo1.acelerar();


// -----------

/* se eu estender uma classe e não precisar criar novos atributos para ela, não preciso criar um novo construtor.
 já poderia usar normalmente tudo da classe pai.
 POrém, como quero ter novos atributos exclusivos na classe filha(Carro), preciso escrever todos os parametros
 da classe pai + os que quero receber para a classe filha. 
 Depois, chamar o super() e passar os parâmetros referentes a classe pai
*/
class Carro extends Veiculo{
  constructor(public marca:string, public nome: string, public ano: number, public portas: number) {
    super(marca, nome, ano);
  }
  encherPneu():void {
    console.log(this.nome + ' encheu o pneu');
  }
}

const carro1 = new Carro('Porche', 'Cayenne', 2011, 4);

carro1.acelerar()
carro1.encherPneu()






// mais um exemplo usando construtor e herança:

class Animal {
  constructor(protected birthDate: Date) { }
}
class Bird extends Animal {
  constructor(public name: string) {
    super(new Date());
  }
}