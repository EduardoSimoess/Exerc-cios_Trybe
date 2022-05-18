// Quesito 1
const newEmployees = (nameArray, func) => {
    const employees = {
        id1: func(nameArray[0]), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: func(nameArray[1]), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: func(nameArray[2]), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const createId = (string) => {
    const newString = string.replace(/ /g, "_")
    const email = `${newString}@trybe.com`;
    id = {
        name: string,
        email: email,
    };
    return id;
}
//   console.log(newEmployees(['Pedro Guerra', 'Luiza Drummond', 'Clara Paiva'], createId));

// Quesito 2
const lotery = (luckNumber, action) => {
    const result = Math.round(Math.random() * 5);
    action(luckNumber, result);
}

const checkResult = (number, resultNumber) => {
    if (number === resultNumber) {
        console.log('Parabéns você ganhou');
    } else {
        console.log('Tente novamente');
    }
}

lotery(2, checkResult);

// Quesito 3
const test = (answers, correctanswers, correction) => {
    correction(answers, correctanswers);
};

const avaluator = (array1, array2) => {
    let counter = 0;
    for (let index = 0; index < array2.length; index += 1) {
        if (array1[index] === array2[index]) {
            counter += 1;
        } else if (array1[index] === 'N.A') {
            counter = counter;
        } else {
            counter -= 0.5;
        }
    }
    console.log(counter);
    // return counter;
}
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
test(STUDENT_ANSWERS, RIGHT_ANSWERS, avaluator);
// console.log(test(STUDENT_ANSWERS, RIGHT_ANSWERS, avaluator));
// console.log(avaluator(STUDENT_ANSWERS, RIGHT_ANSWERS));