import React from "react";
import "./pokeList.scss";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

class PokeList extends React.Component {
  render() {
    const pokemons = this.props.pokedex.map((pokemon) => {
      return (
        <li key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });

    return (
      <>
        <h2 className="pokemonTitle">Mi lista de Pokemon</h2>
        <ul className="pokemonList">{pokemons}</ul>
      </>
    );
  }
}
PokeList.propsTypes = {
  pokedex: PropTypes.array,
};
export default PokeList;
