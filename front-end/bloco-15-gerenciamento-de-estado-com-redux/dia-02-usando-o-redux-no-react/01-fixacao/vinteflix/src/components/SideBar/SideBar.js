import React from 'react';
import { connect } from 'react-redux'; // importei
import './SideBar.css';

class SideBar extends React.Component {

  selectMovie = (categoryId, movieId) => {

    const selectedCategory = this.props.categories.find((category) => category.id === categoryId);

    const selectedMovie = selectedCategory.movies.find((movie) => movie.id === movieId);
    
    // escrevendo no estado global
    this.props.dispatch( { type: 'MUDAR_FILME', payload: selectedMovie } ); // payload (nome comum) é o nome da var chave apenas, nada de mais
  }

  render() {

    console.log(this.props);

    const { categories} = this.props;

    return (
      <div className="SideBar">
        <ul>

          {
            categories.map((category) => (
              <li key={ category.id }>
                <span className='categoria'>{ category.name }</span>
                  {
                    category.movies.map((movie) => (
                      <button key={ movie.id } onClick={() => this.selectMovie(category.id, movie.id)}>
                        { `${ movie.day } - ${ movie.trybe } - ${ movie.title }` }
                      </button>
                    ))
                  }
              </li>
            ))
          }

        </ul>
      </div>
    );
  }
}

// mapeia a store para ser lida nesse componente. E posso usar o state no meu render
const mapStateToProps = (state) => ({
  meuState: state,
  categories: state.categories,
  selectMovie: state.selectedMovie,
})

export default connect( mapStateToProps )( SideBar );

// 3º: no componente que precisar ler da store, devo usar o connect

/*
o connect tem a responsabilidade de passar dados para o meu componente

ao criar essa linha com connect acima, já tenho o dispatch disponível para uso
ele usou pra testar uma escrita simples na store

*/

/*

4º usar o mapStateToProps para ler dados da store

*/



// mapDispatchToProps vai ser similar ao mapStateToProps, mas usaremos menos