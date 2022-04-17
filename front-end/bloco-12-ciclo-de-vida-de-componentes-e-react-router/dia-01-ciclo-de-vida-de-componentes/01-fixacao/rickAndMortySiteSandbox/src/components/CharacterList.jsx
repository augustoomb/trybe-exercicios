//https://rickandmortyapi.com/api/character
import React from "react";

class CharacterList extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      characters: null
    };
    this.url = "https://rickandmortyapi.com/api/character";
    this.getcharacter = this.getcharacter.bind(this);
  }

  // chamar o getCharacter assim que o componente for montado

  componentDidMount() {
    this.getcharacter();
  }

  async getcharacter() {
    this.setState(
      { loading: true }, // loading deve ser informado
      async () => {
        const api = await fetch(this.url);
        const data = await api.json();

        console.log(data);

        // adicionar dados e modificar o loading
        this.setState({
          loading: false,
          characters: data.results
        });
      }
    );
  }

  render() {
    const { loading, characters } = this.state;
    return (
      <div className="App">
        {loading && <p>Loading</p>}
        {!loading && (
          <div>
            {characters.map((character) => (
              <div key={character.name} className="flex">
                <img
                  className="character-image"
                  src={character.image}
                  alt="character.name"
                />
                <p>{character.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CharacterList;
