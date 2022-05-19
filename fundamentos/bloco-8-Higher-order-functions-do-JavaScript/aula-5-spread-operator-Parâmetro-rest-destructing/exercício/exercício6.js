const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const createObj = ([model, brand, year]) => {
    const obj = {
        model,
        brand,
        year,
    }
    return obj;
}

console.log(createObj(palio));
console.log(createObj(shelbyCobra));
console.log(createObj(chiron));