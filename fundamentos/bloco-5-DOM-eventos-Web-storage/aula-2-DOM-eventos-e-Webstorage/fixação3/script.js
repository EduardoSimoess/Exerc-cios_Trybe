// Quesito 1 - Fixação 1
let father = document.getElementById('pai');
let brother = document.createElement ('section');
brother.id = 'brother';
father.appendChild(brother);
document.getElementById ('brother').innerText = "Brother";

// Quesito2 - Fixação 1
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let childElementoOndeVoceEsta = document.createElement('section');
childElementoOndeVoceEsta.id = 'childElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(childElementoOndeVoceEsta);
document.getElementById ('childElementoOndeVoceEsta').innerText = "childElementoOndeVoceEsta";

// Quesito 3 - Fixação 1
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let childPrimeiroFilhoDoFilho = document.createElement('section');
childPrimeiroFilhoDoFilho.id = 'childPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(childPrimeiroFilhoDoFilho);
document.getElementById('childPrimeiroFilhoDoFilho').innerText = "childPrimeiroFilhoDoFilho";

// Quesito 4 - Fixação 1
let terceiroFilho = childPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
terceiroFilho.innerText = "terceiroFilho";

// Fixação 2
let childrenList = document.getElementById('pai').children;
let primeiroFilho = document.getElementById('primeiroFilho');
for (let index = 0; index < childrenList.length; index += 1){
  if (childrenList[index] === elementoOndeVoceEsta || childrenList[index] === primeiroFilho){
      childrenList = childrenList;
  }
  else {
      father.removeChild(childrenList[index]);
  }
}
console.log(childrenList)
