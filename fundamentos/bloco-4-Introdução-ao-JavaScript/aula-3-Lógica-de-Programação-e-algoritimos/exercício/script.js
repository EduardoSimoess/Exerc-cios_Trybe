// Questão 1
let fatorial = 1;
let number = 10;
for (let index = 1; index <= number; index += 1) {
    fatorial = fatorial * index;
}
console.log(fatorial);

// Questão 2
let word = "trybe";
let reverse = "";
for (index = 0; index < word.length; index += 1) {
    reverse += word[word.length - 1 - index];
}
console.log(reverse);

// Questão 3

// 3.1
let array = ['java', 'javascript', 'python', 'html', 'css'];
let size = 0;
let bigger = "";
for (index = 0; index < word.length; index += 1) {
    if (array[index].length > bigger.length) {
        bigger = array[index];
    }
}
console.log (bigger);

// 3.2
size = bigger.length;
let smaller = bigger;
for (index = 0; index < word.length; index += 1) {
    if (array[index].length < smaller.length) {
        smaller = array[index];
    }
}
console.log (smaller);


// Questão 4
let maiorPrimo = 1;
let primo = true;
for (index = 1; index < 51; index +=1)
{
  for (let i = 1; i < index; i +=1)
  {
      if (index % i === 0) {
          primo = false;
      }
  }
  if (primo) {
      maiorPrimo = index;
  }
}
console.log (maiorPrimo);