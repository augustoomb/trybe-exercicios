// INVERSÃO DE DEPENDÊNCIA. 

interface Instrument {
  name: string;
  play(): void;
}

class Flute implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

// INJEÇÃO DE DEPENDENCIA: AO USAR UM ATRIBUTO NÃO PRIMITIVO (COMO O INSTRUMENT, POR EX.) OU EU RECEBO OBJ PRONTO INSTANCIADO POR PARAM OU INSTANCIO DA FORMA QUE FIZ NA LINHA 36. INSTANCIAR ASSIM SERIA ERRADO NO CORPO DO CONSTRUTOR:  this.flute = new Flute('minha flauta'); => problema está em usar o this, pois fixamos um objeto e causa acoplamento
class Musician {
  constructor(
    public name: string,
    public instrument: Instrument = new Flute('Minha flauta') // INVERSÃO DE DEPENDÊNCIA: ATENÇÃO AQUI! É IMPORTANTE QUE EU SEMPRE TENHA AQUI UM TIPO MAIS GENÉRICO POSSIVEL PRO CONTEXTO. REPARE QUE O TIPO USADO NÃO É FLAUTA E SIM Instrument, QUE É MAIS GENÉRICO
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`
    );
  }
}

const musician1 = new Musician('Márcia');
const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));

musician1.play();
musician2.play();
musician3.play();