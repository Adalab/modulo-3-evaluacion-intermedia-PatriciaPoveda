import React from "react";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
    console.log(props.pokemon.types);
  }
  render() {
    const pokeType = this.props.pokemon.types.map((type, index) => {
      console.log(type);
      return <li key={index}>{type}</li>;
    });
    return (
      <>
        <div>
          <img src={`${this.props.pokemon.url}`} />
          <h2>{this.props.pokemon.name}</h2>
          <ul>{pokeType}</ul>
        </div>
      </>
    );
  }
}
export default Pokemon;
