import React from 'react'

// Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'.

class Header extends React.Component {
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