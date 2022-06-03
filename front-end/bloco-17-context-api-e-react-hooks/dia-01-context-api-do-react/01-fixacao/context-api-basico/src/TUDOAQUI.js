/*
NÃO FIZ FUNCIONAR. APENAS COLOQUEI TUDO AQUI.
É IMPORTANTE APENAS PARA ENTENDER A ESTRUTURA
*/

import React, { Component } from 'react';

//criação do contexto
const FamilyContext = React.createContext();

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    
    // estado que vai ser usada por toda a aplicação
    this.state = {
      inheritance: 1000000,
    }

    this.spendInheritance = this.spendInheritance.bind(this);
  }

  // função que vai ser usada por toda a aplicação
  spendInheritance() {
    this.setState((prevState) => ({ inheritance: prevState.inheritance - 1000 }));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      spendInheritance: this.spendInheritance
    };

    return (
      // provider sendo colocado no componente "mais alto" e passando o estado como value
      <FamilyContext.Provider value={contextValue}>
        <Grandmother />
      </FamilyContext.Provider>
    );
  }
}

function Grandmother(props) {
  return <Father />;
}

function Father(props) {
  return <Daughter />;
}

function Daughter() {
  return (
    // uso (consumer) do que foi fornecido pelo provider
    <FamilyContext.Consumer>
      {({ inheritance, spendInheritance }) => ( // aqui é o obj value. No caso foi desconstruído
        <div>
          <span>
            `Tenho uma herança de R$ ${inheritance} que recebi do meu bisavô`
          </span>
          <button type="button" onClick={spendInheritance}>
            Gastar Herança!
          </button>
        </div>
      )}
    </FamilyContext.Consumer>
  );
}