import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);
    
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  // Dica setState: Há 3 formas:
  //- A 1ª e mais simples: só coloco: this.setState e passa o obj
  //- A 2ª tipo a 1ª, mas recebo o estado anterior como param. Tem ex em codigo e aula ao vivo
  //- A 3ª é a abaixo. 2 parametros

  async fetchJoke() {
    this.setState(
      { loading: true }, // o set state é assincrono. Por isso, enquanto o 'salvamento' de fato do loanding como 'true' lá no state não for completado, o segundo parametro(bloco abaixo) não vai ser executado
      async () => {
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

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    // this.setState(({ storedJokes, jokeObjs }) => ({ storedJokes: [...storedJokes, jokeObj] })  "destructuring"
    this.setState((prevState) => ({
      storedJokes: [...prevState.storedJokes, this.state.jokeObj]
    }));

    this.fetchJoke();
  }

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
    const { storedJokes } = this.state; // não precisaria se eu usasse a linha com o map comentado
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {/*{this.state.storedJokes.map((joke) => (<p key={joke.id}>{joke.joke}</p>))} */}
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        { this.state.loading ? loadingElement : this.renderJokeElement() }
      </div>

      
    )
  }
}

export default DadJoke;

//Se eu renderizar se condicional e o valor de algum state for undefined, vai dar pau pra renderizar



/* 

import React from 'react';
import Joke from './Joke';

class DadJoke extends React.Component {
  constructor() {
    super();
    
    this.state = {
      piada: 'minha piada'
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

*/