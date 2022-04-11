// Quesito 1:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem vinda, " + info["personagem"]);

// Quesito 2
info["recorrente"] = "Sim";
console.table (info);

// Quesito 3
for (let key in info) {
    console.log (key);
}

// Questio 4
for (let key in info) {
    console.log (info[key]);
}

// Quesito 5
let information = {
    personagem: "Tio Patinhas" ,
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178" ,
    nota: "O último MacPatinhas" ,
    recorrente: "Sim",
};

console.log (info["personagem"] + " e " + information["personagem"] + ".");
console.log (info["origin"] + ", " + information["origem"] + ".");
console.log (info["nota"] + " e " + information["nota"] + ".");
console.log ("Ambos recorrentes");

// Quesito 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: 
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    
  };
  console.log ("O livro favoito de " + leitor["nome"] + " " + leitor["sobrenome"] + " se chama " + leitor["livrosFavoritos"]["titulo"] + ".");

// Quesito 7
leitor["livrosFavoritos"]["livro2"] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  };

  console.table (leitor);

// Quesito8
console.log ("Julia tem dois livros favoritos: " + leitor["livrosFavoritos"]["titulo"] + " e " + leitor["livrosFavoritos"]["livro2"]["titulo"]);