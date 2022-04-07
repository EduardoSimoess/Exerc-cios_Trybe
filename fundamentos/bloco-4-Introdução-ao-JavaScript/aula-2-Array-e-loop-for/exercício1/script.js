let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Questão 1
for (let index=0; index < numbers.length; index +=1) {
console.log (numbers[index]);
}

// Questão 2
let soma = 0;
for (let index=0; index < numbers.length; index +=1) {
    soma = soma + numbers[index];
    }
    console.log (soma);

// Questão 3
soma = 0;
let média = 0;
for (index=0; index < numbers.length; index +=1) {
    soma = soma + numbers[index];
    média = soma/(index+1)

    }
    console.log (média);
// Questão 4
if (média > 20) {
    console.log ("Valor maior que 20");
}
else {
    console.log ("Valor menor ou igual a 20");
}
// Questão 5
let maior = 0;
for (index =0; index < numbers.length; index +=1) {
    if (numbers[index] > maior) {
        maior = numbers[index];
    }
    else {
        maior = maior;
    }
}
console.log (maior);
// Questão 6
let ímpares = 0;
for (index =0; index < numbers.length; index +=1) {
    if (numbers[index]%2 !=0) {
        ímpares +=1;
    }
    else {
        ímpares = ímpares;
    }
}
if (ímpares === 0) {
    console.log ("nenhum valor ímpar encontrado")
}
else {
    console.log (ímpares);
}
// Questão 7
let menor = maior;
for (index =0; index < numbers.length; index +=1) {
    if (numbers[index] < menor) {
        menor = numbers[index];
    }
    else {
        menor = menor;
    }
}
console.log (menor);
// Questão 8
let número = [];
for (index =1; index < 26; index +=1) {
 número.push(index); 
}
console.log (número);
// Questão 9
let division = [];
for (index =1; index < 26; index +=1) {
    division.push(index/2); 
   }
   console.log (division);

// Bônus 1
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let position = 0;
let lesser;
let  secondIndex;
for (index = 1; index < number.length ; index +=1) {
for (secondIndex=0; secondIndex < index; secondIndex +=1){
    if (number[secondIndex]>number[index]){
        lesser = number [index];
        number [index] = number[secondIndex];
        number [secondIndex] = lesser;  
    }
}


}
console.log (number);
// Bonus 2
let number2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (index = 1; index < number2.length ; index +=1) {
for (secondIndex=0; secondIndex < index; secondIndex +=1){
    if (number2[secondIndex]<number2[index]){
        lesser = number2 [index];
        number2 [index] = number2[secondIndex];
        number2 [secondIndex] = lesser;  
    }
}


}
console.log (number2);