import React from 'react';
import Joke from './Joke';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined, // piada atual
      loading: true,
      storedJokes: [], // todas as piadas
    }
  }

  // pega uma piada da API e seta no state
  async fetchJoke() {
    this.setState(
      { loading: true }, // essa linha fica "ativa" enquanto todo o bloco abaixo não terminar completamente. 
      async() => { // segundo parametro: quero essa lógica só aconteça quando a atualização da linha de cima termine
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders) // retorno é uma promisse, ou seja, requestReturn é uma promisse
        const requestObject = await requestReturn.json(); // obj javascript com o retorno da requisição
        this.setState({
          loading: false,
          jokeObj: requestObject,
        })
      }
    )
  }

  //lembrando que o método abaixo é um metodo do ciclo de vida do componente. É executado na fase de montagem.
  //então, em resumo, estou fazendo com que uma piada seja montada logo no inicio da vida do componente
  //Lembrando que o render já está montando a piada que está no state. e o render sempre será recarregado caso o state seja mudado
  componentDidMount() {
    this.fetchJoke();
  }

  // //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
  saveJoke() {
    this.setState((anterior) => ({
      storedJokes: [...anterior.storedJokes, this.state.jokeObj], //simples: estou adicionando o jokeObj no meu arr de piadas vindo do estado anterior do state. Tudo isso é mandando pra dentro do storedJokes

    }));

    this.fetchJoke();
  }

  // renderiza uma piada na tela
  renderJokeElement() {
    return(
      <div>
        <p>{ this.state.jokeObj.joke }</p>
        <button type="button" onClick={ this.saveJoke }>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    // o map é um map normal, mas ele fez desestruturação.
    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {
        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */
        <p>
          {
            loading
              ? loadingElement
              : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
          }
        </p>
      }

      </div>
    );
  }
}

export default DadJoke;
