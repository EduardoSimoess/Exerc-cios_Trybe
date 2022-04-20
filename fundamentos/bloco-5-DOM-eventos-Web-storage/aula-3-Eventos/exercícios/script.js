function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Quesito 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let days = document.getElementById('days');
for (index = 0; index < dezDaysList.length; index += 1) {
    let day = document.createElement('li');
    day.classList.add('day');
    day.innerText = dezDaysList[index];

    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
        day.classList.add('holiday');

    } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
        day.classList.add('friday');
    } else if (dezDaysList[index] === 25) {
        day.classList.add('holiday', 'friday');
    }
    days.appendChild(day);
}

// Quesito 2 
let buttonsFather = document.getElementsByClassName('buttons-container')[0];

function buttonName(string, id) {
    let button = document.createElement('BUTTON');
    button.innerText = string;
    button.id = id;
    buttonsFather.appendChild(button);
}
buttonName("Feriado", 'btn-holiday');



// Quesito 3
let botaoFeriaodos = document.getElementById('btn-holiday');
botaoFeriaodos.addEventListener('click', function () {
    let feriados = document.getElementsByClassName('holiday');
    for (index = 0; index < feriados.length; index += 1) {
        feriados[index].style.backgroundColor = "green";
    }
    
})

// Quesito 4/5
buttonName("Sexta-feira", 'btn-friday');

let botaoSexta = document.getElementById('btn-friday');
botaoSexta.addEventListener('click', function () {
    let sextas = document.getElementsByClassName('friday');
    let sextaNumber = document.getElementsByClassName('friday');
    let text = 'sextou';
    for (index = 0; index < sextas.length; index += 1) {
        if (sextas[index].innerText === text) {
            sextas[index].innerText = Number(sextas[index].previousElementSibling.innerText) + 1;   
        } else {
            sextas[index].innerText = text;
        }
    }
})

// Quesito 6
days.addEventListener('mouseover', function (event){
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = '600';
})
days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = '10'
})

// Quesito 7
let tasksDad = document.getElementsByClassName ('my-tasks')[0];
function createTask (stringTask){
    let task = document.createElement('span');
    tasksDad.appendChild(task);
    task.innerText = stringTask;
    task.id = 'tarefa';
}
createTask('Wash the dishes');

// Quesito 8
function color (cor) {
    let color = document.createElement('div');
    color.className = 'task';
    tasksDad.appendChild(color);
    color.style.backgroundColor = cor;
}
color("pink");

// Quesito 9
let mark = document.querySelector('.task');
let marking= document.getElementsByClassName('task selected');
mark.addEventListener('click', function(event){
    if (marking.length === 0){
        event.target.className = 'task selected';
    } else {
        event.target.className = 'task';
    }
})

