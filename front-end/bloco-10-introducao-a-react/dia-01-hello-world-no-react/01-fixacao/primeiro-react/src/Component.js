import React from 'react'
// crie um componente que retorne um <h1> com o seu nome um paragráfo, <p> , com uma breve descrição sobre você.
class MeuComponente extends React.Component {
  
  render() {
    const nome = 'Augusto Barbosa';
    const descricao = 'Sou o Augusto Barbosa, estudante de desenvolvimento web na Trybe!'
    return (
      <div>
        <h1>{ nome }</h1>
        <p>{ descricao }</p>
      </div>
    )
  }
}

export default MeuComponente