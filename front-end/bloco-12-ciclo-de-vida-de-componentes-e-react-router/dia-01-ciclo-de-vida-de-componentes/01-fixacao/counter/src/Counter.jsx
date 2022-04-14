import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  // um dos mais importantes pro momento de estudo
  //lembrando que o método abaixo é um metodo do ciclo de vida do componente. É executado na fase de montagem.  
  componentDidMount() {
    console.log("componentDidMount");
  }

  // aqui consigo acessar as props e states seguintes
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextState);
    return true; // se retornar falso, o render não roda novamente a cada atualização.
  }

  // aqui consigo acessar as props e os estados anteriores
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevState);
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))} // pega o estado anterior e soma 1;
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;


// Perceba que o estado só é de fato atualizado quando chega no método componentDidUpdate . 
//Por isso, caso seja necessário impedir uma renderização, você deve utilizar
//o método shouldComponentUpdate , que permite comparar os atuais e próximos estados ou props
// e adicionar a lógica.