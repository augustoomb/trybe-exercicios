import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Voltar a home</Link>
        <p>Componente About</p>
      </div>
    );
  }
}

export default About;

// Link é ssimplesmente um link mesmo. Vai para a rota que eu indicar no 'to'
// o '/' no caso é a home (configurei isso no app.js)