import React from 'react';
import TextAreaTeste from './TextAreaTeste';

class Form extends React.Component {
  constructor() {
    super(); // super é obrigatório para dar acesso ao this

    this.setarValoresNoState = this.setarValoresNoState.bind(this)

    this.state = {
      textAreaTeste: '',
      inputTeste: '',
      meuCheckBox: false
    }
  }

  setarValoresNoState(evento) { // no course, sempre chamam essas funções de handleALGUMACOISA
    
    const nomeElemento = evento.target.name;
    const valorElemento = evento.target.type === 'checkbox' ? evento.target.checked : evento.target.value  // o valor do checkbox não fico no value, e sim no checked

    this.setState({
      [nomeElemento]: valorElemento
    })
  }

  //num label, posso usar htmlFor (no lugar no 'for' do html)

  render() {
    return(
      <div>
        <h1>Meu form</h1>
        <form>
          <TextAreaTeste value={this.state.textAreaTeste} setarValoresNoState={this.setarValoresNoState}/>
          <input name='inputTeste' value={this.state.inputTeste} onChange={this.setarValoresNoState}></input>
          <input type='checkbox' name='meuCheckBox' value={this.state.meuCheckBox} onChange={this.setarValoresNoState}></input>
        </form>
      </div>
    )
  }
}

export default Form;


// no course fizeram o método que eu chamei de setarValoresNoState usando destructuring:

/* 

handleChange({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
    [name]: value,
  });
}

*/