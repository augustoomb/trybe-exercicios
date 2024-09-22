import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class Album extends React.Component {
  constructor() {
    super();

    this.listarMusicas = this.listarMusicas.bind(this);

    this.state = {
      album: [],
      loading: false,
      favoritesSongs: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    this.setState(
      { loading: true },
      async () => {
        const respAlbum = await getMusics(id);
        const respFavorites = await getFavoriteSongs();
        this.setState({
          loading: false,
          album: respAlbum,
          favoritesSongs: respFavorites,
        });
      },
    );

    // const resp = await getMusics(id);

    // this.setState({
    //   album: resp,
    // });
  }

  listarMusicas() {
    const { album, loading, favoritesSongs } = this.state; // todo o arr de albuns da api simulada; A primeira posição são informções do album e não uma música...
    const arrMusics = [...album];// ...por isso fiz uma cópia do album
    arrMusics.shift(); // ... e tirei a 1ª posição (q são as infos do album e nao uma musica)

    return (
      !loading
        ? (
          <div>
            {
              arrMusics.map((music, index) => (
                <MusicCard
                  key={ index }
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId }
                  // onCheckboxChange={ this.onCheckboxChange }
                  music={ music }
                  favoritesSongs={ favoritesSongs }
                />
              ))
            }
          </div>)
        : <Loading />
    );
  }

  render() {
    const { album } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {
          album.length > 0
            ? (
              <div>
                <h4 data-testid="artist-name">{ album[0].artistName }</h4>
                <p data-testid="album-name">{ album[0].collectionName }</p>
                { this.listarMusicas() }
              </div>)
            : null
        }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.func,
};

Album.defaultProps = {
  match: () => {},
};

export default Album;
