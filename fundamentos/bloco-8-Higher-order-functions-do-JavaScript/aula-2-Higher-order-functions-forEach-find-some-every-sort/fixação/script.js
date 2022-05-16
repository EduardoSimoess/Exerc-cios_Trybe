// .forEach
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];

const showEmailList = (email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// .find
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((elemento) => {
    return elemento % 3 === 0 && elemento % 5 === 0
});

console.log(findDivisibleBy3And5);

// ---------------------------------------------------------

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length === 5)

console.log(findNameWithFiveLetters);

// ---------------------------------------------------------
const musicas = [{
        id: '31031685',
        title: 'Partita in C moll BWV 997'
    },
    {
        id: '31031686',
        title: 'Toccata and Fugue, BWV 565'
    },
    {
        id: '31031687',
        title: 'Chaconne, Partita No. 2 BWV 1004'
    },
]

const findMusic = (serialNumber) => musicas.find((musica) => {
    musica.id === serialNumber;
    return musica;
});
const choosenMusic = findMusic('31031685');

console.log(choosenMusic.title);

// Some & every 
const names1 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) => element === name);

console.log(hasName(names1, 'Ana'))

// ---------------------------------------------------------

const people = [{
        name: 'Mateus',
        age: 18
    },
    {
        name: 'José',
        age: 16
    },
    {
        name: 'Ana',
        age: 23
    },
    {
        name: 'Cláudia',
        age: 20
    },
    {
        name: 'Bruna',
        age: 19
    },
];

const verifyAges = (arr, minimumAge) => {
    return arr.every((person) => person.age >= minimumAge);
}

console.log(verifyAges(people, 18));

// Sort
const pessoas = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  pessoas.name.sort();  
  console.log(pessoas);