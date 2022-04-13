 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe #2fc18c.
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
//  Questão 1   
 document.getElementsByTagName("p")[1].innerText = "Daqui a dois anos espero ser um programador trabalhando no exterior.";
// Questão 2
 document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
//  Questão 3
 document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
//  Questão 4
 document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaEscripit";
//  Questão 5
 document.getElementsByTagName("p")[0].style.textTransform = "uppercase";
 //  Questão 6
 for (let index = 0; index < paragraphs.length; index += 1){
 document.getElementsByTagName("p")[index].innerHTML;}


