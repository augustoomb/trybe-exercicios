import React from 'react';
import { NavLink } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';
import '../style/Header.css';
import menuLogo from '../images/logo-menu.png';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState(
      { loading: true },
      async () => {
        const requestResult = await getUser();
        this.setState({
          loading: false,
          user: requestResult,
        });
      },
    );
  }

  render() {
    const { loading, user } = this.state;

    return (
      <header data-testid="header-component">
        {
          loading
            ? (
              <Loading />
            )
            : (
              <div>
                <div className="menu-nivel-1">
                  <img className="menu-logo" src={ menuLogo } alt="img-menu" />
                  <p className="nome-usu" data-testid="header-user-name">{ user.name }</p>
                </div>
                <div className="menu-nivel-2">
                  <NavLink
                    data-testid="link-to-search"
                    to="/search"
                  >
                    Pesquisa
                  </NavLink>
                  <NavLink
                    data-testid="link-to-favorites"
                    to="/favorites"
                  >
                    Favoritas
                  </NavLink>
                  <NavLink
                    data-testid="link-to-profile"
                    to="/profile"
                  >
                    Perfil
                  </NavLink>
                </div>
              </div>
            )
        }
      </header>
    );
  }
}

export default Header;
