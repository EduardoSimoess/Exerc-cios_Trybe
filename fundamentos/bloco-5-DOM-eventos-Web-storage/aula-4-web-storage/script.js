// Tentativa Original
// window.onload = function(){
// let page = document.querySelector('body');
// let selector = document.querySelector('select');
// selector.addEventListener('change', function(event){
// page.style.backgroundColor = event.target.innerHTML;
// })

// }

// Tentativa com button
// window.onload = function(){
    // let page = document.querySelector('body');
//     let button = document.querySelector('#green')
//     console.log(button.innerHTML);
//     button.addEventListener('click', function(event){
//     page.style.backgroundColor = event.target.innerHTML;
//     })

//     }


window.onload = function () {
    // Quesito 1
    let page = document.querySelector('body');
    let selector = document.querySelector('select');
    selector.addEventListener('change', function (event) {
        page.style.backgroundColor = event.target.value;
        let backgroundColor = event.target.value;
        localStorage.setItem('backgroundColor', backgroundColor);
    })
    let savedBackground = localStorage.getItem('backgroundColor');
    page.style.backgroundColor = savedBackground;

    // Quesito 2
    let font = document.getElementById('fontFamily');
    font.addEventListener('change', function () {
        page.style.fontFamily = event.target.value;
        localStorage.setItem('fontStyle', event.target.value);
    })
    let savedFontStyle = localStorage.getItem('fontStyle');
    page.style.fontFamily = savedFontStyle;

    // Quesito 3
    for (let index = 0; index < 2; index += 1) {
    let fontSize = document.querySelector('input');
    let fontSizeButton = document.getElementById('fontSizeButton');
    let paragraphs = document.getElementsByTagName('p')[index];
    fontSizeButton.addEventListener('click', function(event){
        paragraphs.style.fontSize = fontSize.value + 'px';
        localStorage.setItem('fontSize', fontSize.value + 'px')
    })
    let savedFontSize = localStorage.getItem('fontSize');
    paragraphs.style.fontSize = savedFontSize;
}
}

