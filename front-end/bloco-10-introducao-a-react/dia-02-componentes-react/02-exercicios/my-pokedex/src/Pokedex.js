import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const listPokemons = this.props.pokemons;
    return (
      <div className="Pokedex">
        { listPokemons.map( (pokemon) => <Pokemon pokemon = {pokemon}/> ) }
      </div>
    );
  }
}

export default Pokedex;