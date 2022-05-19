// Fixação parte 1
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Suco de laranja', 'Mamão', 'Melancia'];

const fruitSalad = (fruit, additional) => {
   const deliciousSalad = [...fruit, ...additional];
   return deliciousSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));

// Fixação parte 2
// Quesito 1
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const mariasData = {...user, ...jobInfos};

  console.log(mariasData);

// Quesito 2
const print = (personsData) => {
const { name, age, nationality, profession, squad, squadInitials } = personsData;
return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;
}
console.log(print(mariasData));

// Fixação parte 3
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [firstElement, secondElement] = saudacoes;
secondElement(firstElement);

// Fixação parte 4 - Dúvida
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const { nationality = 'Brazilian' } = person;
console.log(nationality);
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// Fixação parte 5
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,});
  
  console.log(getPosition(-19.8157, -43.9542));

// Fixação 6
const multiply = (number = 1, value = 1) => number * value;
  
  console.log(multiply(8));
  console.log(multiply());