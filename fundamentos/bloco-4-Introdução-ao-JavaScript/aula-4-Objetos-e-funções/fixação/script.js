// Fixação 1
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },

};

console.log("A jogadora " + player["name"] + " " + player["lastName"] + " tem " + player["age"] + " anos de idade.")

player["bestInTheWrold"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player);

console.log("A jogadora marta foi eleita a melhor do ano por 6 vezes: " + player["bestInTheWrold"]);

console.log("A jogadora possui " + player["medals"]["golden"] + " medalhas de ouro e " + player["medals"]["silver"] + " de prata");

// Fixação 2
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let index in names) {
    console.log("Olá " + names[index]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let key in car) {
    console.log(key, car[key]);
}
// Fixação 3
// Quesito 1
function soma(a, b) {
    return a + b;
}

function subtração(a, b) {
    return a - b;
}

function multiplicação(a, b) {
    return a * b;
}

function divisão(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

console.log(soma(4, 2), subtração(4, 2), multiplicação(4, 2), divisão(4, 2), modulo(4, 2));

// Quesito 2
let maiorNumero = 0;

function bigger (c, d) {
    if (c > d) {
        maiorNumero = c;
    }
    else {
        maiorNumero = d;
    }
    return maiorNumero;
}
console.log(bigger(9, 72));

// Quesito 3
function bigger3 (c, d, e) {
    if (c > d && c > e) {
        maiorNumero = c;
    }
    else if (d > c && d > e) {
        maiorNumero = d;
    }
    else {
        maiorNumero = e;
    }
    return maiorNumero;
}

console.log(bigger3(9, 72, 37));

// Quesito 4
function signal(x) {
    if (x > 0) {
        console.log ("O valor " + x + " é positivo");
    }
    else if (x < 0) {
        console.log ("O valor " + x + " é negativo");
    }
    else {
        console.log ("O valor " + x + " é nulo");
    }
}

signal(0);

// Questão 5

function triangle (a, b, c) {
    if (a + b + c === 180 && a > 0 && b > 0 && c > 0) {
        console.log ("True");
    }
    else {
        console.log ("False");
    }
}

triangle (22, -13, -347);