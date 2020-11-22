import React from "react";
import "./pokemon.scss";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const pokeType = this.props.pokemon.types.map((type, index) => {
      return (
        <li className="pokemonItem__type--item" key={index}>
          {type}
        </li>
      );
    });
    return (
      <article className="pokemonItem">
        <img
          className="pokemonItem__img"
          src={`${this.props.pokemon.url}`}
          alt={`Pokemon: ${this.props.pokemon.name}`}
        />
        <h2 className="pokemonItem__name">{this.props.pokemon.name}</h2>
        <ul className="pokemonItem__type">{pokeType}</ul>
      </article>
    );
  }
}
Pokemon.propsTypes = {
  types: PropTypes.string,
  name: PropTypes.string,
};
export default Pokemon;
