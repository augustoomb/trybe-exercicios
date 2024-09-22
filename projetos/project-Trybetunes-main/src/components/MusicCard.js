import React from 'react';
import '../style/MusicCard.css';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';
// import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeToFavorites = this.removeToFavorites.bind(this);

    this.state = {
      isFavorite: false,
      loading: false,
    };
  }

  componentDidMount() {
    const { favoritesSongs, music } = this.props;

    const boolThisSongIsFavorite = favoritesSongs.some((song) => (
      JSON.stringify(song) === JSON.stringify(music)));

    this.setState({
      isFavorite: boolThisSongIsFavorite,
    });
  }

  onCheckboxChange(event) {
    // const strNameMusic = event.currentTarget.parentNode.parentNode.firstElementChild.innerText;
    // const selectedMusic = this.state.album.find((music) => music.trackName === strNameMusic);

    const { music } = this.props;

    this.setState((prevState) => ({
      isFavorite: !prevState.isFavorite,
    }));

    if (event.target.checked) {
      this.addToFavorites(music);
    } else {
      this.removeToFavorites(music, event);
    }
  }

  removeToFavorites(music, event) {
    const { getFavSongs } = this.props;
    const isFavPage = event.currentTarget.parentNode
      .parentNode.parentNode.className === 'pageFav';

    this.setState(
      { loading: true },
      async () => {
        await removeSong(music);
        if (isFavPage) {
          await getFavSongs();
        }
        this.setState({
          loading: false,
        });
      },
    );
  }

  addToFavorites(music) {
    this.setState(
      { loading: true },
      async () => {
        await addSong(music);
        this.setState({
          // favoritesSongs: [...prevState.favoritesSongs, music],
          loading: false,
        });
      },
    );
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { loading, isFavorite } = this.state;

    return (
      !loading
        ? (
          <div className="card">
            MusicCard
            <p>{ trackName }</p>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>
            <label htmlFor="checkFavorita">
              Favorita: &nbsp;
              <input
                name="checkFavorita"
                data-testid={ `checkbox-music-${trackId}` }
                type="checkbox"
                checked={ isFavorite }
                onChange={ this.onCheckboxChange }
              />
            </label>
          </div>)
        : <Loading />
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.string,
  music: PropTypes.string,
  favoritesSongs: PropTypes.string,
  getFavSongs: PropTypes.func,
};

MusicCard.defaultProps = {
  trackName: '',
  previewUrl: '',
  trackId: '',
  music: '',
  favoritesSongs: '',
  getFavSongs: () => {},
};

export default MusicCard;
