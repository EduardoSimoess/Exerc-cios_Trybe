const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// //   const addShift = (shift1, shift2) => {
// //    const nightShift = Object.assign({}, lesson1, lesson2);
// //    console.log(nightShift);
// //   }

// //   addShift(lesson2, lesson3);

// const shift = (obj, property, descriptor) => {
//     // const id = chave.innerText;
//     // obj[id] = value;
//     Object.defineProperty(obj, property, descriptor)

// }

// shift(lesson2, 'turno', 'noite');
// console.log(lesson2);

const listKeys = (obj) => {
    console.log(Object.keys(obj));
}
listKeys(lesson1);

const objSize = (obj) => {
    console.log(Object.values(obj).length);
}
objSize(lesson1);

const listValues = (obj) => {
    console.log(Object.values(obj));
}

listValues(lesson2);

const assembleLessons = (obj, obj1, obj2) => {
    const allLessons = Object.assign({obj}, {obj1}, {obj2});
    console.log(allLessons);
    countStudents(allLessons);
}

const countStudents = (obj) => {
    const valuesArray = Object.values(obj);
    const sum = valuesArray[0]['numeroEstudantes'] + valuesArray[1]['numeroEstudantes'] + valuesArray[2]['numeroEstudantes'];
    console.log(sum);
}
assembleLessons(lesson1, lesson2, lesson3);

const posiotionValue = (obj, position) => {
    const arrayValues = Object.values(obj);
    console.log(arrayValues[position]);
}
posiotionValue(lesson1, 1);

const isItThere = (obj, chave, valor) => {
    const arrayValues = Object.values(obj);
    const arrayKeys = Object.keys(obj);
    for(let index = 0; index < arrayValues.length; index += 1) {
    if(arrayValues[index].innerText !== valor.innerText || arrayKeys[index].innerText !== chave.innerText){
        return true;
    } else {
        return false;
    }
    } 
}

isItThere(lesson1, 'materia', 'física');