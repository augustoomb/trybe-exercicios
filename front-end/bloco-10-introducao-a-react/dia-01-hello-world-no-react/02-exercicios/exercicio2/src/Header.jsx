// import React from 'react'
import { Component } from 'react' // fiz com desestruturação só pra testar se funciona também

// Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'.

// class Header extends React.Component {
class Header extends Component { // fiz com desestruturação só pra testar se funciona também
  render() {
    const textoH1 = 'Conteúdos de Front-End';
    return (
      <div>
          <h1 className='header'>{ textoH1 }</h1>
      </div>
    )
  }
}

export default Header