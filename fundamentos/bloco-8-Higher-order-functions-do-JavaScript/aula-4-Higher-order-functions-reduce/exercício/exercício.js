// Quesito 1
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    // escreva seu código aqui
}

// ------------------------------

const books = [{
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Quesito 2
function reduceNames(array) {
    return array.reduce((result, book, index) => {
        if (index === 0) {
            return `${book.author.name}`;
        } else if (index === array.length - 1) {
            return `${result}, ${book.author.name}.`;
        }
        return `${result}, ${book.author.name}`;
    }, '')
}
console.log(reduceNames(books));

// Quesito 3
const avarageAge = (array) => {
    const ages = books.reduce((result, number, index) => {
        let age = number.releaseYear - number.author.birthYear;
        return (result + age);
    }, 0)
    return ages / (array.length)

}
console.log(avarageAge(books));

// Quesito 4
const LongestTitle = (array) => {
    return array.reduce((result, book) => {
        if (book.name > result) {
            result = book;
        }
        return result;
    })
}
console.log(LongestTitle(books));

// Quesito 5
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
        return array.reduce((result, word) => {
         let upperWord = word.toUpperCase();
         let counter = upperWord.split('A');
         return result + (counter.length - 1);
        }, 0)
}

console.log(containsA(names));