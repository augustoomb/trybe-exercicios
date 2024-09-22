import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Profile extends React.Component {
  constructor() {
    super();

    this.getUser = this.getUser.bind(this);

    this.state = {
      loading: true,
      userState: '',
    };
  }

  componentDidMount() {
    this.getUser();
  }

  async getUser() {
    this.setState(
      { loading: true },
      async () => {
        const user = await getUser();
        this.setState({
          userState: user,
          loading: false,
        });
      },
    );
  }

  render() {
    const { loading, userState } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />
        {
          !loading
            ? (
              <div>
                <img
                  data-testid="profile-image"
                  src={ userState.image }
                  alt={ userState.name }
                />
                <h1>{ userState.name }</h1>
                <h1>{ userState.email }</h1>
                <h1>{ userState.description }</h1>
                <Link to="/profile/edit">Editar perfil</Link>
              </div>
            )
            : <Loading />
        }
      </div>
    );
  }
}

export default Profile;
