const {sum, myRemove, myFizzBuzz} = require('./sum');
const add = require('./sum');

describe('Quesito 1', () => {
    it('A função recebe os parâmetros 4 e 5 e retorna 9', () => {
        expect(sum(4, 5)).toBe(9);
    })

    it('A função recebe os parâmetros 0 e 0 e retorna 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    it('A função quebra o fluxo com um erro quando são lançados os valores 4 e "5"', () => {
        expect(() => sum(4, '5')).toThrow(Error);
    })
})

describe('Quesito 2', () => {
    it('A função recebe o array [1, 2, 3, 4] e o número 3 e retorna [1, 2, 4]', () => {
        const array = [1, 2, 3, 4];
        expect([1, 2, 4]).toEqual(myRemove(array, 3));
    })

    it('A função recebe o array [1, 2, 3, 4] e o número 3 e retorna um array diferente de [1, 2, 3, 4]', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('A função recebe o array [1, 2, 3, 4] e o número 5 e retorna o array [1, 2, 3, 4]', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
    })
})

describe('Quesito 3', () => {
    it('A função recebe o número 15 e retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    })  

    it('A função recebe o número 6 e retorna "fizz"', () => {
        expect(myFizzBuzz(6)).toMatch('fizz');
    }) 

    it('A função recebe o número 10 e retorna "buzz"', () => {
        expect(myFizzBuzz(10)).toMatch('buzz');
    }) 

    it('A função recebe o número 2 e tetorne num', () => {
        expect(myFizzBuzz(2)).toBe(2);
    }) 

    it('A função recebe "olá"', () => {
        expect(myFizzBuzz("olá")).toBeFalsy();
    }) 
})