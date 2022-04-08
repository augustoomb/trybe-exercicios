import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {

  constructor(props) {
    super();

    this.changePokemon = this.changePokemon.bind(this)
    this.filterPokemons = this.filterPokemons.bind(this)

    this.state = {
      pokemon: props.pokemons[0], // 1º inicio o state mostrando o primeiro pokemon da lista
      pokemonsState: props.pokemons // todos os pokemons do props vão para o state
    }
  }

  // método é chamado a cada clique no botão próximo
  changePokemon() {
     
    // verifico o indice do pokemon que está atualmente no state
    const indicePokemonAtual = this.state.pokemonsState.findIndex( (pok) => pok.id === this.state.pokemon.id);

    // verifico se eu somar 1un no indice achado acima, ele não ultrapassará o tamanho do arr de pokemons
    if(indicePokemonAtual+1 < this.state.pokemonsState.length) {
      // se não passar, seto no state o pokemon com o indice atual + 1
      this.setState( () => ({
        pokemon: this.state.pokemonsState[indicePokemonAtual + 1]
      }) )
    }
    else{
      // se passar, significa que o arr chegou ao fim. Por isso, seto o pokemon 0 (zero)
      this.setState( () => ({
        pokemon: this.state.pokemonsState[0]
      }) )
    }        
  }

  filterPokemons(type) {

    let filteredPokemons=[];

    if(type !== '') {
      filteredPokemons = this.props.pokemons.filter( (pok) => pok.type === type )
    }else{
      filteredPokemons = this.props.pokemons;
    }
    

    this.setState( () => ({
      pokemonsState: filteredPokemons,
      pokemon: filteredPokemons[0]
    }))
  }

  render() {
    return (
      <div className="pokedex">
        <Pokemon pokemon={this.state.pokemon}/>
        <button onClick={this.changePokemon}>Próximo</button>
        <div>
          <button onClick={() => this.filterPokemons('Fire')}>Fire</button>
          <button onClick={() => this.filterPokemons('Psychic')}>Psychic</button>
          <button onClick={() => this.filterPokemons('')}>TODOS</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;

// {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
