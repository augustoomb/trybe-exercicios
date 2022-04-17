import React from 'react';

class PaiPropChildren extends React.Component {
  render() {
    return (
      <div>
        <h1>PaiPropChildren</h1>
        <div>{ this.props.children }</div> {/* já que  FilhoPropChildren está dentro de PaiPropChildren lá no home, significa que aqui posso acessar o conteudo de filhoPropchildren atraves de this.props.children*/}
      </div>
    )
  }
}

export default PaiPropChildren;