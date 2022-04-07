//Quesito 1//
const A = 50;
const B = 100;
console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(A / B);
console.log(A % B);

//Questão 2//
if (A > B) {
    console.log(A);
} else if (B > A) {
    console.log(B);
} else {
    console.log("Os valores são iguais")
}
//Questão 3//
const C = 130;
if (A > B && A > C) {
    console.log(A);
} else if (B > A && B > C) {
    console.log(B);
} else if (C > A && C > B) {
    console.log(C);
} else {
    console.log("Os valores são iguais");
}
//Questão 4//
if (C > 0) {
    console.log("Positivo");
} else if (C < 0) {
    console.log("Negativo");
} else {
    console.log("Nulo");
}
//Questão 5//
const A1 = 30;
const A2 = 150;
const A3 = 20;
if ((A1 + A2 + A3) === 180 && A1 > 0 && A2 > 0 && A > 0) {
    console.log("true");
} else {
    console.log("erro");
}
//Questão 6//
const peça = 'torre';

switch (peça.toLowerCase()) {
    case 'Torre':
        console.log("Torre -> Se move para frente e lados");
        break;

    case "Bispo":
        console.log("Bispo -> Se move nas diagonais");
        break;

    case "Rainha":
        console.log("Rainha -> Se move em todas as direções");
        break;
    default:
        console.log("Peça inválida")
        break;
}
//Questão 7//
const nota = 70;
if (nota >= 90) {
    console.log(nota % 100);
    console.log("A");
} else if (nota >= 80 && nota <= 90) {
    console.log(nota % 100);
    console.log("B");
} else if (nota >= 70 && nota <= 80) {
    console.log(nota % 100);
    console.log("C");
} else if (nota >= 60 && nota <= 70) {
    console.log(nota % 100);
    console.log("D");
} else if (nota >= 50 && nota <= 60) {
    console.log(nota % 100);
    console.log("E");
} else if (nota < 50) {
    console.log(nota % 100);
    console.log("F");
} else {
    console.log("erro");
}
//Questão 8//
if (A % 2 == 0 || B % 2 == 0 || C % 2 == 0) {
    console.log("true");
} else {
    console.log("false")
}
//Questão 9//
if (A % 2 !== 0 || B % 2 !== 0 || C % 2 !== 0) {
    console.log("true");
} else {
    console.log("false")
}
let lucro = (B - 1.2 * A) * 1000;

if (A > 0 && B > 0) {
    console.log(lucro);
} else {
    console.log("Erro");
}
// Exercício 11
const salário= 3000;
let Líquido;
if (salário <= 1556.94) {
    Líquido = 0.92 * salário;
} else if (salário > 1556.94 && salário <= 2594.92) {
    Líquido = salário * 0.91;
} else if (salário > 2594.92 && salário <= 5189.92) {
    Líquido = salário * 0.89;
} else if (salário > 5189.82) {
    Líquido = salário - 570.88;
} else {
    console.log("Erro");
}
let LíquidoIr;

if (Líquido <= 1903,98) {
    LíquidoIr = (0.925 * Líquido) + 142.80;
} else if (Líquido > 1903.99 && Líquido <= 2826.65) {
    LíquidoIr = (Líquido * 0.85) + 354.80;
} else if (Líquido > 2826.66 && Líquido <= 3751.05) {
    LíquidoIr = (Líquido * 0.85) + 636.16;
} else if (Líquido >= 3751.06 && Líquido <= 4664.68) {
    LíquidoIr = (Líquido*0.775) + 636.13;
} else if (Líquido >= 4664.68) {
    LíquidoIr = (Líquido*0.725) + 869.36;
}
else {
    console.log ("Erro");
}
console.log (LíquidoIr);