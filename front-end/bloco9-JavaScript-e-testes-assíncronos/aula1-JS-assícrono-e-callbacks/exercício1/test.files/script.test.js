const {
    uppercase,
    getPokemonDetails
} = require('./script');

describe('Primeiro bloco de teste', () => {
    it('Testar se ao receber uma palavra ela fica maiúscula', (done) => {
        uppercase('ola', (result) => {
            try {
                expect(result).toBe('OLA');
                done();
            } catch (error) {
                done(error);
            }
        });
    });
});


describe("A função getPokemonDetails", () => {
    it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
        function callback(err, message) {
            try {
                expect(message).toBe('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
                done();
            } catch (error) {
                done(error);
            }
        }
        getPokemonDetails((pokemon) => {
            pokemon.name === 'Bulbasaur';
            return pokemon;
        }, callback);
    });
    //   it("retorna um pokemon que existe no banco de dados", () => {
    //     // Escreva aqui seu código
    //   });
});