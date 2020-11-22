import React from "react";
import "./App.scss";
import PokeList from "./PokeList";
import data from "../data/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: data,
    };
  }
  render() {
    return (
      <main className="app">
        <PokeList pokedex={this.state.pokedex}></PokeList>
      </main>
    );
  }
}

export default App;
