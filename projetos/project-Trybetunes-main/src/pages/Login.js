import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import '../style/Login.css';
import loginLogo from '../images/fundo-login.png';

class Login extends React.Component {
  render() {
    const {
      nameInput, disabledButton, loading,
      messageLoginResult, onInputChange, onclickEntrar,
    } = this.props;

    /* Se 'messageLoginResult' for vazio, significa que a promise lá no App.js ainda não foi concluída.
    Por isso ainda é necessário permanecer na tela de login. Se for diferente de vazio, já concluí a promise e devo
    redirecionar para a rota '/search' */

    /* Dentro da condição 'messageLoginResult vazio', tenho duas situações:
    -primeiro é o inicial. Não há loading e a tela mostra o form
    -segunda é: aṕos clicar no botão de entrar, a request está em execução no App.js e setei loading como true. Enquanto
    loading for true não mostro a tela de login e sim o componente Loading, que vai mostrar um 'carregando' na tela */
    return (
      messageLoginResult === ''
        ? (
          <div data-testid="page-login" className="login">
            {
              !loading
                ? (
                  <div className="main-login">
                    <img className="login-logo" src={ loginLogo } alt="login" />
                    <form className="form-login">
                      <label htmlFor="nameInput" className="labelName">
                        <input
                          placeholder="Nome"
                          className="nameInput"
                          name="nameInput"
                          data-testid="login-name-input"
                          type="text"
                          value={ nameInput }
                          onChange={ onInputChange }
                        />
                        <br />
                      </label>
                      <button
                        className="loginButton"
                        data-testid="login-submit-button"
                        type="button"
                        onClick={ onclickEntrar }
                        disabled={ disabledButton }
                      >
                        Entrar
                      </button>
                    </form>
                  </div>)
                : <Loading />
            }
          </div>)
        : <Redirect to="/search" />

    );
  }
}

Login.propTypes = {
  nameInput: PropTypes.string,
  disabledButton: PropTypes.bool,
  loading: PropTypes.bool,
  onInputChange: PropTypes.func,
  onclickEntrar: PropTypes.func,
  messageLoginResult: PropTypes.string,
};

Login.defaultProps = {
  nameInput: '',
  disabledButton: true,
  loading: false,
  onInputChange: () => {},
  onclickEntrar: () => {},
  messageLoginResult: '',
};

export default Login;
