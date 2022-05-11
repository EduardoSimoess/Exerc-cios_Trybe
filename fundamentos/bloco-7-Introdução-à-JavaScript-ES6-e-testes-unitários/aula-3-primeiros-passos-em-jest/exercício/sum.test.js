const {sum, myRemove, myFizzBuzz, techList, hydrate} = require('./sum');
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

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});