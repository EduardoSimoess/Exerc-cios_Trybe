// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// Parte 1
// Quesito 1
// const testingScope = (escopo) => {
//     if (escopo === true) {
//         var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//         console.log(ifScope);
//     } else {
//         var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// Quesito 2
const testingScope = (escopo) => {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        console.log(`${ifScope} ótimo, fui utilizada no escopo ! `);
        console.log(ifScope);
    } else {
        var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Parte 2 
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const compare = (a, b) => {
    return a - b;
}
const order = (numberArray) => {
    numberArray.join();
    numberArray.sort(compare);
    console.log(numberArray);
}

order(oddsAndEvens);