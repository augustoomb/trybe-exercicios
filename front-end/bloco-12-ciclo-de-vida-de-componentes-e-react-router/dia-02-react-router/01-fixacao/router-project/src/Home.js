import React from 'react';
import { Link } from 'react-router-dom';
import FilhoPropChildren from './FilhoPropChildren';
import PaiPropChildren from './PaiPropChildren';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about">about</Link>
        <h1>Componente Home</h1> 
        <h2>Testando propchildren abaixo:</h2>
        <PaiPropChildren teste="testando">
          <FilhoPropChildren />
        </PaiPropChildren>
      </div>
    )
  }
}

export default Home;

/* 
Explicando propschildren:
No exemplo acima renderizei PaiPropChildren. Dentro dele, renderizei FilhoPropChildren.
Apenas feito isso, eu não tenho o conteúdo de FilhoPropChildren renderizado na tela.
Não é assim que funciona.
O que funciona é eu aproveitar que aqui o FilhoPropChildren está de PaiPropChildren.
Então, lá em PaiPropChildren eu posso chamar this.props.children.
Com isso, eu pego lá todo o conteúdo renderizado em FilhoPropChildren.
Se FilhoPropChildren é renderizado dentro do PaiPropChildren
e PaiPropChildren é renderizado aqui, eu vejo o conteúdo dos dois
*/