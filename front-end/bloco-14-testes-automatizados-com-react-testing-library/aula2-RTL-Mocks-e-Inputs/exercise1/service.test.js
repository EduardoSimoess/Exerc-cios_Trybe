const random = require('./service');

describe("Testes referentes à parte 1", () => {
    test('Ex1', () => { 
        random.retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
        
        random.retornaNumeroAleatorio()

        expect(random.retornaNumeroAleatorio()).toBe(10);
        expect(random.retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
     })

     test('Ex2', () => { 
        const mockDiv = jest.spyOn(random, 'div');

        expect(mockDiv(4, 2)).toBe(2);
        expect(mockDiv).toHaveBeenCalledTimes(1);
     })


     test('Ex3', () => {
        random.retornaNumeroAleatorio.mockClear()
        random.retornaNumeroAleatorio.mockImplementation((a, b, c) => a*b*c)

        expect(random.retornaNumeroAleatorio(1, 2, 3)).toBe(6);
        expect(random.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
     })

})