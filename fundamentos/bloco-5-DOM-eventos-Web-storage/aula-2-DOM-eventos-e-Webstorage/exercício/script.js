// Quesito 1
let body = document.getElementsByTagName('body')[0];
let title1 = document.createElement('h1');
title1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(title1);

// Quesito 2
let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// Quesito 3
let section1 = document.createElement('section');
section1.className = 'center-content';
main.appendChild(section1);

// Quesito 4
let paragraph1 = document.createElement('p');
section1.appendChild(paragraph1);
paragraph1.innerText = 'Exercício feito para desenvolver minhas habilidades em JavaScript e DOM.'

// Quesito 5
let section2 = document.createElement('section');
section2.className = 'left-content';
main.appendChild(section2);

// Quesito 6
let section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);

// Quesito 7
let image = document.createElement('img');
image.className = "small-image";
image.src = "https://picsum.photos/200";
section2.appendChild(image);

// Quesito 8
let unorderedList = document.createElement('ul');
section3.appendChild(unorderedList);

let listItens = [
    'unix',
    'Git',
    'HTML',
    'Lógica de programação',
    'DOM',
    'Forms, FlexBox',
    'JavaScript ES6',
    'CSS',
    'Higher Order',
    'Testes assincrons',
];
for (let index = 0; index < listItens.length; index += 1){
    let listItem = document.createElement('li');
    listItem.innerText = listItens[index];
    unorderedList.appendChild(listItem);
}

// Quesito 9
for (index = 0; index < 3; index += 1){
    let h3 = document.createElement('h3');
    h3.innerText = "h3 - title";
    main.appendChild(h3);
}