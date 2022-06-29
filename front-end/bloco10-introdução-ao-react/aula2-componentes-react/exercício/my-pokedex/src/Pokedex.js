import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";
class Pokedex extends React.Component {
    render () {
        const list = ['Pikachu', 'Charmander'];
        const objList = list.map((item) => {
            return pokemons.find((pokemon) => pokemon.name === item)
        })
        console.log(objList);
        return (<article>{objList.map((obj, index) => {
        return <Pokemon key={index} pokemon = {obj} />})}</article>)
    }
}

export default Pokedex;