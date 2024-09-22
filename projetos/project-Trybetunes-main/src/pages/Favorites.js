import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class Favorites extends React.Component {
  constructor() {
    super();

    this.getFavSongs = this.getFavSongs.bind(this);

    this.state = {
      loading: false,
      favoritesSongs: [],
    };
  }

  componentDidMount() {
    this.getFavSongs();
  }

  async getFavSongs() {
    this.setState(
      { loading: true },
      async () => {
        const respFavSongs = await getFavoriteSongs();
        this.setState({
          loading: false,
          favoritesSongs: respFavSongs,
        });
      },
    );
  }

  render() {
    const { favoritesSongs, loading } = this.state;

    return (
      <div data-testid="page-favorites" className="pageFav">
        <Header />
        {
          !loading
            ? (
              favoritesSongs.map((music, index) => (
                <MusicCard
                  key={ index }
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId }
                  music={ music }
                  favoritesSongs={ favoritesSongs }
                  getFavSongs={ this.getFavSongs }
                />
              ))
            )
            : <Loading />
        }
      </div>
    );
  }
}

export default Favorites;
