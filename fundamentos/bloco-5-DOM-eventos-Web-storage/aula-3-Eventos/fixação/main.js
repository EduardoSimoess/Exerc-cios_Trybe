const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// Quesito 1
// R.: A diferença ocorre por conta da estilização proposta para a classe tech, que altera seu alinhamento no eixo y.

// Quesito 2
firstLi.className = "";
firstLi.addEventListener("click",reciveClass);
function reciveClass(){
    firstLi.className = "tech";
}

// Quesito 3 - Dúvida
input.addEventListener("input", firstTech);

function firstTech(input){
    firstLi.innerText = input.target.innerHTML;
}

// Quesito 4
let container = document.getElementsByClassName('container');
container.addEventListener("dblclick", redirect);
function redirect{
    window.location.replace('https://eduardosimoess.github.io/');
}

function resetText(event) {

  event.target.innerText = 'Opção reiniciada';
 
}

firstLi.addEventListener('dblclick', resetText);

