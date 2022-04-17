// import logo from './logo.svg';
import React from 'react';
import logo from './assets/trybemestar.png';
import './App.css';
import Timer from './components/Timer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: false,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  changeTimer() {
    this.setState((prevState) => ({ // prevState é o estado atual. É mais garantido usar assim devido ao código assincrono...
      timer: !prevState.timer, // ... ou seja, ele é o momento exato antes dessa linha acontecer.
    }));
  }

  render() {
    const { timer } = this.state;

    return (
      <div>
        <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        { timer && <Timer on={ timer } /> }
        <button
          type="button"
          onClick={ () => { this.changeTimer(); } } // não preciso fazer bind no construtor se chamo a função com arrow function
        >
          { timer ? 'Desligar Timer' : 'Ligar Timer' }
        </button>
      </div>
    );
  }
}

export default App;

// outra forma de fazer isso: { timer ? 'Desligar Timer' : 'Ligar Timer' }

/*
  { timer && 'Desligar Timer' }
  { !timer && 'Ligar Timer' }
*/
