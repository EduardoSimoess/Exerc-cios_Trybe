import React from "react";
const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];
// const obj = ({ conteudo, bloco, status }) => {
//     const answer = {
//         'O conteúdo é': conteudo,
//         'Status': status,
//         'Bloco': bloco,
//     };
//     return <li>{answer}</li>;
// }
const obj = ({ conteudo, bloco, status }) => {
    return <li>
        <p>O conteúdo é: {conteudo}</p>
        <p>Status: {status}</p>
        <p>Bloco: {bloco}</p>
    </li>;
}
const items = conteudos.map((conteudo) => obj(conteudo));
class Content extends React.Component {
    render() {
        return <ul>{items}</ul>
    }
}

export default Content;