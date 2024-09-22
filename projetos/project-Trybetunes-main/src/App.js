import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createUser } from './services/userAPI';
import Album from './pages/Album';
import Login from './pages/Login';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Loading from './pages/Loading';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onclickEntrar = this.onclickEntrar.bind(this);

    this.state = {
      nameInput: '',
      disabledButton: true,
      loading: false,
      messageLoginResult: '',
    };
  }

  // seta valor do input na variável do estado
  onInputChange(event) {
    const nameElement = event.target.name;
    const valueElement = event.target.value;
    const limit = 3;

    if (valueElement.length >= limit) {
      this.setState({
        [nameElement]: valueElement,
        disabledButton: false,
      });
    } else {
      this.setState({
        [nameElement]: valueElement,
        disabledButton: true,
      });
    }
  }

  // ao clicar no botão entrar da tela de login, faça:
  async onclickEntrar() {
    const { nameInput } = this.state;

    this.setState(
      { loading: true }, // enquanto o set no state não for concluido de fato (assinc..), não ir pra próxima linha...
      async () => {
        const requestResult = await createUser({ name: nameInput });
        this.setState({
          loading: false,
          messageLoginResult: requestResult, // trará um 'OK' caso a promise execute com sucesso
        });
      },
    );
  }

  render() {
    const { nameInput, disabledButton, loading, messageLoginResult } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Login
              { ...props }
              nameInput={ nameInput }
              disabledButton={ disabledButton }
              loading={ loading }
              messageLoginResult={ messageLoginResult }
              onInputChange={ this.onInputChange }
              onclickEntrar={ this.onclickEntrar }
            />
            ) }
          />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="/loading" component={ Loading } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// render={ (props) => <Login { ...props } nameInput={ nameInput } disabledButton={ disabledButton } loading={ loading } messageLoginResult={ messageLoginResult } onInputChange={ this.onInputChange } onclickEntrar={ this.onclickEntrar } /> }
