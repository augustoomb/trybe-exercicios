import propTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from './Loading';
import '../style/ProfileEdit.css';

class ProfileEdit extends React.Component {
  constructor() {
    super();

    this.getUser = this.getUser.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
    this.validarEmail = this.validarEmail.bind(this);
    this.onClickSalvar = this.onClickSalvar.bind(this);
    this.mountStateUser = this.mountStateUser.bind(this);

    this.state = {
      loading: false,
      nameInput: '',
      emailInput: '',
      imgInput: '',
      descInput: '',
      enabledButton: false,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  onInputChange(event) {
    const nameElement = event.target.name;
    const valueElement = event.target.value;

    this.setState(
      { [nameElement]: valueElement },
      async () => {
        const activateButton = this.checkInputs();
        this.setState({
          enabledButton: activateButton,
        });
      },
    );
  }

  async onClickSalvar() {
    const { history } = this.props;

    this.setState(
      { loading: true },
      async () => {
        await updateUser(this.mountStateUser());
        history.replace('/profile'); // o react usa o histório do navegador com base. O history mantem essas rotas. Usando o replace posso alternar: https://codedcreatures.com/2020/03/17/conditional-redirects-in-react-router/ -- https://www.pluralsight.com/guides/using-react-with-the-history-api
        this.setState({
          loading: false,
        });
      },
    );
  }

  async getUser() {
    this.setState(
      { loading: true },
      async () => {
        const user = await getUser();
        this.setState({
          nameInput: user.name,
          emailInput: user.email,
          imgInput: user.image,
          descInput: user.description,
          loading: false,
        });
      },
    );
  }

  validarEmail(email) {
    const regExp = /\S+@\S+\.\S+/; // (Apenas para pegar a expressão regular. Elas servem para validar uma string de acordo com uma necessidade específica. Nesse caso, quero validar se a string é um e-mail válido) https://guisalmeida.com/aprendendo-regex-na-pr%C3%A1tica-validando-emails/ & https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    return regExp.test(email);
  }

  checkInputs() {
    const { nameInput, emailInput, imgInput, descInput } = this.state;

    const nameIsValid = nameInput.length > 0 && this.validarEmail(emailInput);
    const emailIsValid = emailInput.length > 0;
    const imgIsValid = imgInput.length > 0;
    const descIsValid = descInput.length > 0;

    return nameIsValid && emailIsValid && imgIsValid && descIsValid;
  }

  mountStateUser() {
    const { nameInput, emailInput, imgInput, descInput } = this.state;

    const objUser = {
      name: nameInput,
      email: emailInput,
      image: imgInput,
      description: descInput,
    };

    // console.log(objUser);

    return objUser;
  }

  render() {
    const { nameInput, emailInput, imgInput, descInput,
      loading, enabledButton } = this.state;

    return (
      <div data-testid="page-profile-edit">
        <Header />
        {
          !loading
            ? (
              <div className="pag-editar-perfil">
                <div className="conteudo-edit-perfil">
                  <h2>Editar perfil</h2>
                  <form className="form-edit-perfil">
                    <label htmlFor="imgInput" className="label-inputs">
                      Imagem: &nbsp;
                      <input
                        name="imgInput"
                        data-testid="edit-input-image"
                        type="text"
                        value={ imgInput }
                        onChange={ this.onInputChange }
                        // alt="image"
                      />
                    </label>
                    <br />
                    <label htmlFor="nameInput" className="label-inputs">
                      Nome: &nbsp;
                      <input
                        name="nameInput"
                        data-testid="edit-input-name"
                        type="text"
                        value={ nameInput }
                        onChange={ this.onInputChange }
                      />
                    </label>
                    <br />
                    <label htmlFor="emailInput" className="label-inputs">
                      E-mail: &nbsp;
                      <input
                        name="emailInput"
                        data-testid="edit-input-email"
                        type="email"
                        value={ emailInput }
                        onChange={ this.onInputChange }
                      />
                    </label>
                    <br />
                    <label htmlFor="descInput" className="label-inputs">
                      Descrição: &nbsp;
                      <input
                        name="descInput"
                        data-testid="edit-input-description"
                        type="text"
                        value={ descInput }
                        onChange={ this.onInputChange }
                      />
                    </label>
                    <br />
                    <button
                      data-testid="edit-button-save"
                      type="button"
                      onClick={ this.onClickSalvar }
                      disabled={ !enabledButton }
                    >
                      Salvar
                    </button>
                  </form>
                </div>
              </div>
            )
            : <Loading />
        }
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: propTypes.string,
};

ProfileEdit.defaultProps = {
  history: '',
};

export default ProfileEdit;
