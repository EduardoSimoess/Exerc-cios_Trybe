// Quesito 1
const fatorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * fatorial (n - 1);
}

console.log(fatorial(6));
// Quesito 2
const bigger = (sentence) => {
    const array = sentence.split(' ');
    let biggestWord = array[0];
    for (let index = 1; index < array.length; index += 1) {
        if (array[index] > biggestWord) {
            biggestWord = array[index];
        }
    }
    console.log(biggestWord);
}

bigger('o rato roeu a roupa do rei de roma');



