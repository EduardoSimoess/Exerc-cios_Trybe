import React from "react";

class PrintName extends React.Component {
    render () {
        const name = <h1>Eduardo Simões</h1>;
        const description = <p>Tenho 25 anos, sou natural de Maceió - Al. Meu passatemṕo favorito é jogar basquete.</p>
        return <div>{name}{description}</div>;
    }
}

export default PrintName;