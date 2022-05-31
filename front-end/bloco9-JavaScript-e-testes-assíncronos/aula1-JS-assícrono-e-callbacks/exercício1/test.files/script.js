// Quesito 7
const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

// Quesito 8
const pokemons = [{
        name: 'Bulbasaur',
        type: 'Grass',
        ability: 'Razor Leaf',
    },
    {
        name: 'Charmander',
        type: 'Fire',
        ability: 'Ember',
    },
    {
        name: 'Squirtle',
        type: 'Water',
        ability: 'Water Gun',
    },
];

function print(n, message) {
    console.log(message);
}

function getPokemonDetails(filter, callback) {
    setTimeout(() => {
        if (pokemons.find(filter) === undefined) {
            return callback(new Error('Não temos esse pokémon para você :('), null);
        }
        const pokemon = pokemons.find(filter);

        const {
            name,
            type,
            ability
        } = pokemon;

        const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

        callback(null, messageFromProfOak);
    }, 2000);
}

getPokemonDetails((pokemon) => {
   return pokemon.name === 'Charmander';
    // return pokemon;
}, print);

module.exports = {
    uppercase,
    getPokemonDetails
};