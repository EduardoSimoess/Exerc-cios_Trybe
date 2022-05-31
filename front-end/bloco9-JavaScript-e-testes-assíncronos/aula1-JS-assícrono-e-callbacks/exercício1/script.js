// Quesito 1
const planetDistanceFromSun = ({
        name,
        distanceFromSun: {
            value,
            measurementUnit
        }
    }) =>
    `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
    name: "Mars",
    distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
    },
};

const venus = {
    name: "Venus",
    distanceFromSun: {
        value: 108200000,
        measurementUnit: "kilometers",
    },
};

const jupiter = {
    name: "Jupiter",
    distanceFromSun: {
        value: 778500000,
        measurementUnit: "kilometers",
    },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C

// Resposta: A ordem é A, B, por fim, C.

// --------------------------------------------------------------------------------------->

// Quesito 2
console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// Resposta: A ordem é A, C, por fim, B.

// --------------------------------------------------------------------------------------->


// Quesito 3
const getPlanet = () => {
    const mars = {
        name: "Mars",
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };
    console.log("Returned planet: ", mars);
};

setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos

// --------------------------------------------------------------------------------------->


// Quesito 4 
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = () => {
//     const temperature = getMarsTemperature();
//     console.log(`Mars temperature is: ${temperature} degree Celsius`);
// }
// setTimeout(() => sendMarsTemperature(), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// --------------------------------------------------------------------------------------->

// Quesito 5
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (callback) => {
// callback(getMarsTemperature());
// }
// setTimeout(() => sendMarsTemperature(temperatureInFahrenheit), messageDelay()); // imprime "It is currently 47ºF at Mars", por exemplo
// setTimeout(() => sendMarsTemperature(greet), messageDelay()); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// --------------------------------------------------------------------------------------->

// Quesito 6
const messageDelay = () => Math.floor(Math.random() * 5000);
const motive = 'the reobot is busy';
const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
    console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);

const propability = () => Math.floor(Math.random() * 11);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback, erro) => {
    if (propability() <= 6) {
        callback(getMarsTemperature());
    } else {
        erro(motive);
    }
}
// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
setTimeout(() => sendMarsTemperature(temperatureInFahrenheit, handleError), messageDelay());

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
setTimeout(() => sendMarsTemperature(greet, handleError), messageDelay());
