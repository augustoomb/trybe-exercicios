// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ValidEmail from './component/ValidEmail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  // parte de teste de comportamentos e eventos
  changeEmail(value) {
    this.setState({ email: value });
  }

  // parte de teste de comportamentos e eventos
  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //     <br />
      //     <label htmlFor="id-email">
      //       Email
      //       <input id="id-email" type="email" />
      //     </label>
      //     <input id="btn-send" type="button" data-testid="id-send" value="Enviar" />
      //     <input id="btn-back" type="button" value="Voltar" />
      //   </header>           
      // </div>

      <div className="App">
        {/* inicio da parte de teste de comportamentos e eventos */}   
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        {/* <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2> */}
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;


/*


	Documentação: OBS: os matchers são os mesmos do jest
	
		Seletores: https://testing-library.com/docs/react-testing-library/cheatsheet
		
		Matchers: https://jestjs.io/pt-BR/docs/expect
		
		User event: https://github.com/testing-library/user-event

*/