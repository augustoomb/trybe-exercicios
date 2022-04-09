// import logo from './logo.svg';
import './App.css';
import React from 'react';

/* SE EU USAR UMA FUNÇÃO DE EVENTO, CRIADA FORA DA CLASSE(MÁ PRÁTICA), POSSO CHAMÁ-LA NORMALMENTE DENTRO DO RENDER NA CLASSE.
   SE EU FOR CHAMAR UMA FUNÇÃO QUE ESTÁ DENTRO DA CLASSE, PRECISO CHAMÁ-LA COM O THIS

   AO CHAMAR O CONSTRUCTOR, TENHO ACESSO AO CONSTRUTOR DO MEU COMPONENTE. CHAMANDO O SUPER LÁ DENTRO,
    TODO O CÓDIGO QUE EU ESCREVER ABAIXO DELE, ME DIZ QUE ESTOU SOBREESCREVENDO O CONSTRUTOR DE REACT.COMPONENT, QUE É
    DE ONDE ESTOU EXTENDENDO

   SE EU CHAMO O THIS (NUM CONSOLE.LOG) DENTRO DO RENDER POR EXEMPLO, É OTIMO: ELE ME MOSTRA TODO O CONTEÚDO DO COMPONENTE
   MAS SE EU FIZER O MESMO DENTRO DA FUNÇÃO printConsoleLog POR EX?
   VEREI UM undefined NA TELA. ESSA É UMA LIMITAÇÃO DO JS, QUE NÃO FOI FEITO PARA USAR CLASSES NATIVAMENTE
   PARA CORRIGIR, PRECISO DESSA gambiarra FEITA COM O BIND NO CONSTRUTOR
   PRECISO FAZER ESSA gambiarra PARA CADA FUNÇÃO

   obs: É importante lembrar que você não pode usar o this em um construtor até que você tenha chamado
    o construtor da classe pai (usando o super()), o JavaScript não vai te deixar fazer isso. Então, por hora,
    apenas lembre-se que para usar o this dentro do constructor() é preciso chamar o super() antes.

    obs2: Se eu tivesse chamado a função printConsoleLog apenas da forma que eu chamei no onClick do botão teste parâmetro (usando arrow func),
    eu não precisaria usar a linha de bind no construtor.

    Mas como eu optei por chamar essa mesma função no onclick do outro botão sem usar arrow function, preciso usar a linha de bind
*/


class App extends React.Component{
  constructor() {
    super(); // chama o construtor da classe de onde herdei (superclasse). Eu herdei de React.Component
    // console.log('Chamando construtor');
    this.printConsoleLog = this.printConsoleLog.bind(this); // preciso chamar essa linha para this funcionar dentro das funções ou lá usar arrow func

    // estado
    this.state = {
      numeroDeCliques: 0,
    }
  }

  colorButton(num) {
    const color = num % 2 === 0 ? 'green' : 'white';
    console.log(color);
    return color;
  }

  printConsoleLog(teste) {
    // console.log(`teste: ${teste}`)
    this.setState( (estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1

    }) )
    // console.log(this); // não funciona sozinho.Preciso da linha 'bind' no construtor Limitação do js citada lá em cima!
  }
  render() {
    // console.log(this); // o this me mostra o componente inteiro. Sempre funciona!
    return (
      <div>
        <button style={{backgroundColor: this.colorButton(this.state.numeroDeCliques)}} onClick={this.printConsoleLog}>{ this.state.numeroDeCliques }</button>
        <button onClick={() => this.printConsoleLog('stringTesteParam')}>teste parâmetro</button>
      </div>
    );
  }
}

export default App;
