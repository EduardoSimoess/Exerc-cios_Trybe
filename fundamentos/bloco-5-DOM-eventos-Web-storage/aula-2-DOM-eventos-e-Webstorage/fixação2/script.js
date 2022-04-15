// Quesito 1
let father = document.getElementById('pai');
let brother = document.createElement ('section');
brother.id = 'brother';
father.appendChild(brother);
document.getElementById ('brother').innerText = "Brother";

// Quesito2
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let childElementoOndeVoceEsta = document.createElement('section');
childElementoOndeVoceEsta.id = 'childElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(childElementoOndeVoceEsta);
document.getElementById ('childElementoOndeVoceEsta').innerText = "childElementoOndeVoceEsta";

// Quesito 3
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let childPrimeiroFilhoDoFilho = document.createElement('section');
childPrimeiroFilhoDoFilho.id = 'childPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(childPrimeiroFilhoDoFilho);
document.getElementById('childPrimeiroFilhoDoFilho').innerText = "childPrimeiroFilhoDoFilho";

// Quesito 4 
let terceiroFilho = childPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
terceiroFilho.innerText = "terceiroFilho";
