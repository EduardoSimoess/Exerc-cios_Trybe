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
// Quesito 1
const print = (array) => array.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
console.log(print(books));

// Quesito 2
const ageAuthorPrint = (array) => array.map((book) => {
    const obj = {
        name: book.author.name,
        age: book.releaseYear - book.author.birthYear,
    };
    return obj;
});
const ordenate = (array) => array.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
});
console.log(ordenate(ageAuthorPrint(books)));

// Quesito 3
const printGenre = (array) => array.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
console.log(printGenre(books));

// Quesito 4
const print60Over = (array) => array.filter((book) => (2022 - book.releaseYear) > 60);
console.log(print60Over(books));

// Quesito 5
const fantasyNCienceFiction = (array) => array.map((book) => book.author.name);
const orderedAuthors = (fantasyNCienceFiction(printGenre(books))).sort();
console.log(orderedAuthors);

// Quesito 6
const over60 = (array) => array.map((book) => book.name);
const orderedTitles = (over60(print60Over(books)).sort());
console.log(orderedTitles);

// Quesito 7
const initials = (array) => array.filter((book) => book.author.name.startsWith("J. R. R."))
console.log(initials(books));