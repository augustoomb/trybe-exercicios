import React from 'react';
import './Form.css';
import estadosBrasil from './data';
import MeuInput from './MeuInput';

class Form extends React.Component {

  constructor() {
    super();

    this.setStateValues = this.setStateValues.bind(this);
    this.mountData = this.mountData.bind(this);
    this.cleanDivData = this.cleanDivData.bind(this);

    this.state = {
      divData: false, // mostrar a div de informações do formulário
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
    };
  }

  setStateValues(event) {
    const nameElement = event.target.name;
    const valueElement = event.target.value;

    this.setState({
      [nameElement]: nameElement === 'nome' ? valueElement.toUpperCase() : valueElement,
    });
  }

  mountData(event) {
    event.preventDefault();
    this.setState({
      divData: true
    });
  }

  cleanDivData(event) {
    // event.preventDefault();
    this.setState({
      divData: false, // mostrar a div de informações do formulário
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
    });
  }

  render() {
    return(
      <div>
        <h1>Meu form</h1>
        <form className='form'>
          <fieldset className='fieldset-dados-pessoais'>
            <legend>Dados Pessoais</legend>
            <MeuInput name="nome" value={this.state.nome} type='text' placeholder='Nome' funcaoState={this.setStateValues} />
            <input name="email" value={this.state.email} type='email' placeholder='E-mail' onChange={this.setStateValues}></input>
            <input name="cpf" value={this.state.cpf} type='text' placeholder='CPF' onChange={this.setStateValues}></input>
            <input name="endereco" value={this.state.endereco} type='text' placeholder='Endereço' onChange={this.setStateValues}></input>
            <input name="cidade" value={this.state.cidade} type='text' placeholder='Cidade' onChange={this.setStateValues}></input>
            <select name="estado" value={this.state.estado} onChange={this.setStateValues}>
              {estadosBrasil.map((estado) => <option key={estado.sigla} value={estado.sigla}>{ estado.nome }</option> )}
            </select>
            <div onChange={this.setStateValues}>
              <label htmlFor="type1">
                <input type="radio" id="type1" value="casa" name="tipo"/>Casa
              </label>
              <label htmlFor="type2">
                <input type="radio" id="type2" value="apto" name="tipo"/>Apto
              </label>       
            </div>     
          </fieldset>
          <button onClick={this.mountData}>Gerar Dados</button>
          <button type='reset' onClick={this.cleanDivData}>Limpar</button>
        </form>
        { this.state.divData ? 
          <div>
            <p>Nome: { this.state.nome }</p>
            <p>E-mail: { this.state.email }</p>
            <p>CPF: { this.state.cpf }</p>
            <p>Endereço: { this.state.endereco }</p>
            <p>Cidade: { this.state.cidade }</p>
            <p>Estado: { this.state.estado }</p>
            <p>Tipo: { this.state.tipo }</p>
          </div>
          : null }
      </div>
    );
  }
}

export default Form;
/*
<input name="nome" value={this.state.nome} type='text' placeholder='Nome' onChange={this.setStateValues}></input>
*/