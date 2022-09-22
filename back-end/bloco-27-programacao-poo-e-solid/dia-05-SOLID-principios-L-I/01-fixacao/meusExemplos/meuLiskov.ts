abstract class Pessoa {
  protected _nome: string;
  protected _profissao: string;

  constructor(nome, profissao) {
    this._nome = nome;
    this._profissao = profissao;
  }

  mostrarInfos():void {
    console.log(`${ this._nome } e ${ this._profissao }`)
  }
}

class Estudante extends Pessoa {
  mostrarInfos():string | number{ // não é correto fazer isso pelo principio de liskov. Precisar ser void, ja q é void na superclasse
    // console.log(`${ this._nome } e ${ this._profissao }`)
    return `${ this._nome } e ${ this._profissao }`
  }
}

const estudante1 = new Estudante('Augusto', 'Desenvolvedor');

const main = (pessoa: Pessoa) => {
  pessoa.mostrarInfos();
}