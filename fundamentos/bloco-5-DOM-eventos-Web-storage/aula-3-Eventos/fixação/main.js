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
    firstLi.innerText = Event.target.innerText;
}

// Quesito 4
myWebpage.addEventListener("dblclick", redirect);
function redirect(){
    window.open('https://eduardosimoess.github.io/', '_blank');
}

// Quesito 6
myWebpage.addEventListener("mouseenter", colorText);
function colorText(){
    myWebpage.style.backgroundColor = "green";
}



