function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

const techList = (array, string) => {
    if (array.length > 0) {
        const techArrray = [];
        array.sort();
        for (let index = 0; index < array.length; index += 1) {
            const obj = {

            };
            obj.tech = array[index];
            obj.name = string;
            techArrray.push(obj);
        }
        return techArrray;
    } else {
        return 'Vazio!';
    }
}

const hydrate = (drinks) => {
    let number = 0;
    const count = /\d+/g;
    const matches = drinks.match(count);
    let matchesNumber = 0;
    for (index = 0; index < matches.length; index += 1) {
      matchesNumber = parseInt(matches[index], '10');
      number = number + matchesNumber;
    }
    if (number === 1) {
      return number + " copo de água";
    } else {
      return number + " copos de água";
    }
  }

  // Dados
const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];
  
  // Pesquisa
  const searchEmployee = (id, detail) => {
      const employeesArray = Object.values(professionalBoard);
      const infoRequestArray = detail.slice(' ');
      for(let x in employeesArray) {
          if(id.innerText === employeesArray[x][0]) {
        const employeesArrayKeys = Object.keys(employeesArray[x]);
        const employeesArrayValues = Object.values(employeesArray[x]);
          }
      }
  };
  
module.exports = {
    sum,
    myRemove,
    myFizzBuzz,
    techList,
    hydrate
};