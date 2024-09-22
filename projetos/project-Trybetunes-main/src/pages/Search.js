import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import '../style/Search.css';

class Search extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.showAlbums = this.showAlbums.bind(this);

    this.state = {
      buscaArtista: '',
      disabledButton: true,
      loading: false,
      arrAlbuns: [],
    };
  }

  // clicar no botão de pesquisar artista
  async onClickButton() {
    const { buscaArtista } = this.state;

    this.setState(
      { loading: true },
      async () => {
        const resultRequest = await searchAlbumsAPI(buscaArtista);
        this.setState({
          loading: false,
          arrAlbuns: resultRequest,
        });
      },
    );
    // const resultRequest = await searchAlbumsAPI(this.state.buscaArtista);
    // console.log(resultRequest);
  }

  // A cada nova letra digitada no input de busca de artista...
  onInputChange(event) {
    if (event.target.value.length >= 2) {
      this.setState({
        buscaArtista: event.target.value,
        disabledButton: false,
      });
    } else {
      this.setState({
        buscaArtista: event.target.value,
        disabledButton: true,
      });
    }
  }

  showAlbums() {
    const { arrAlbuns, buscaArtista } = this.state;
    return (
      <div>
        Resultado de álbuns de: &nbsp;
        { buscaArtista }
        <div>
          {
            arrAlbuns.map((album, index) => (
              <p key={ index }>
                <Link
                  data-testid={ `link-to-album-${album.collectionId}` }
                  to={ `/album/${album.collectionId}` }
                >
                  { album.collectionName }
                </Link>
              </p>))
          }
        </div>
      </div>
    );
  }

  render() {
    const { disabledButton, loading, arrAlbuns } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        {
          !loading
            ? (
              <div className="pag-pesquisa">
                <div className="area-form-pesquisa">
                  <form className="form-pesquisa">
                    <label htmlFor="buscaArtista" className="label-input-pesquisa">
                      <input
                        className="input-pesquisa"
                        name="buscaArtista"
                        data-testid="search-artist-input"
                        type="text"
                        placeholder="Nome do artista"
                        onChange={ this.onInputChange }
                      />
                    </label>
                      &nbsp;
                    <button
                      className="button-pesquisa"
                      data-testid="search-artist-button"
                      type="button"
                      onClick={ this.onClickButton }
                      disabled={ disabledButton }
                    >
                      Pesquisar
                    </button>
                  </form>
                </div>
                {
                  arrAlbuns.length > 0
                    ? this.showAlbums()
                    : (<p>Nenhum álbum foi encontrado</p>)
                }
              </div>)
            : <Loading />
        }
      </div>
    );
  }
}

export default Search;

/*
<hr/>
<p>{ album.artistId }</p>
<p>{ album.artistName }</p>
<p>{ album.collectionId }</p>
<p>{ album.collectionName }</p>
<p>{ album.collectionPrice }</p>
<p>{ album.artworkUrl100 }</p>
<p>{ album.releaseDate }</p>
<p>{ album.trackCount }</p>
<hr/>
*/
