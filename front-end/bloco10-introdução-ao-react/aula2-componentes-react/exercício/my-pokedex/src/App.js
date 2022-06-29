import './App.css';
// import pokemons from './data';
// import Pokemon from './Pokemon';
// import { ReactPropTypes } from 'react';
import Pokedex from './Pokedex';
function App() {
  return (
  <div>
    {/* {pokemons.map((pokemon, index) => {
      return <Pokemon key={index} pokemon = {pokemon} />
    })} */
    <Pokedex />
    }
  </div>
  );
}

export default App;
