import React from "react";

import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: props,
    };
  }
  render() {
    console.log(this.state.pokedex);
    const pokemons = this.props.pokedex.map((pokemon) => {
      return (
        <li key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });

    return (
      <>
        <ul>{pokemons}</ul>
      </>
    );
  }
}
export default PokeList;
