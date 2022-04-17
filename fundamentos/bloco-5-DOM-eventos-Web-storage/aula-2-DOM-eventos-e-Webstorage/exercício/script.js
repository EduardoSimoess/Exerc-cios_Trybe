// Quesito 1
let body = document.getElementsByTagName('body')[0];
let title1 = document.createElement ('h1');
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