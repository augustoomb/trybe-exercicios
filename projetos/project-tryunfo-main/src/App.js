import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() { // primeiro método a ser chamado ao construir o componente
    super();

    this.onInputChange = this.onInputChange.bind(this); // necessário para eu usar o método aqui no componente
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);

    this.state = { // criar um state para cada input que está no form
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrCards: [],
    };
  }

  onDeleteButtonClick(event) {
    const { arrCards } = this.state;
    // console.log(event.currentTarget.parentNode.firstElementChild.innerText);
    /* já que a carta contem elementos html, ao clicar no botão chamo o pai do botão, depois
       o primeiro filho para pegar o nome. Os demais irmãos tem as outras informações */

    const textHtmlName = event.currentTarget.parentNode.firstElementChild.innerText;
    // const textHtmlTrunfo = event.currentTarget.parentNode.children[7].innerText;

    const novoArrCards = arrCards.filter((card) => card.cardName !== textHtmlName);

    const temTrunfoNoArr = novoArrCards.some((card) => card.cardTrunfo === true);

    this.setState({
      arrCards: novoArrCards,
      hasTrunfo: temTrunfoNoArr,
    });
  }

  onSaveButtonClick() {
    const { // dados do state
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    const objCard = { // object shorthand https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    if (objCard.cardTrunfo) { // descobrir se é cardTrunfo no momento do seu cadastro.
      this.setState({
        hasTrunfo: true,
      });
    }

    // Base: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // Não totalmente baseado, mas me inspirei nessa postagem: https://www.robinwieruch.de/react-state-array-add-update-remove/
    this.setState((estadoAnterior) => ({
      arrCards: [...estadoAnterior.arrCards, objCard],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  }

  // quando algo altera no input do form, chamo esse método
  onInputChange(event) {
    let currentDisableButton = true; // checar dados atuais
    const nameElement = event.target.name; // name do input (setei lá)
    const valueElement = event.target.type === 'checkbox' // value do input (criado aqui, mas passado pra lá(form) via props)
      ? event.target.checked : event.target.value; // se for checkbox tenho um boolean para o 'checked' e não um value normal

    currentDisableButton = this.checkCurrentInput(nameElement, valueElement); // Faz a checagem do input do momento. Se tudo está ok retorna FALSE; (Motivo: ideia inversa do botão: false ativa o botão)

    this.setState((previousState) => ({
      [nameElement]: valueElement,
      isSaveButtonDisabled: this.validatorInputs( // enquanto currentDisableButton valida o input do momento, aqui eu valido todos os outros, pegando do state
        previousState, nameElement,
      ) || currentDisableButton, // as duas condições precisam ser falsas para liberar o botão
    }));
  }

  // métodos de validação de inputs

  // auxilia o método validatorInputs() a checar os inputs
  checker(strElement, nameElement, notCheckThisElement) {
    let customReturn = true;
    if ((notCheckThisElement === strElement)
    || (notCheckThisElement !== strElement && nameElement.length > 0)) {
      customReturn = false;
    }
    return customReturn;
  }

  // valida os valores dos inputs salvos no state. Usa o previousState, que pega os dados de antes do event atual, evitando problemas de assincronicidade
  validatorInputs(previousState, notCheckThisElement) { // previousState é o estado anterior do state
    const emptyName = this.checker(
      'cardName', previousState.cardName, notCheckThisElement,
    );
    const emptyDescription = this.checker(
      'cardDescription', previousState.cardDescription, notCheckThisElement,
    );
    const emptyImage = this.checker(
      'cardImage', previousState.cardImage, notCheckThisElement,
    );
    const emptyRare = this.checker(
      'cardRare', previousState.cardRare, notCheckThisElement,
    );

    return emptyName || emptyDescription || emptyImage || emptyRare; // só retorna false se todos forem falsos.
  }

  checkCurrentInput(nameElement, valueElement) { // faz a checagem do input atual. Simplesmente checa se ele não está em branco(MELHORAR DEPOIS)
    if (nameElement === 'cardTrunfo') {
      return false;
    }

    let customReturn = true;

    if (nameElement === 'cardName' && valueElement.length > 0) {
      customReturn = false;
    }

    if (nameElement === 'cardDescription' && valueElement.length > 0) {
      customReturn = false;
    }

    if (nameElement === 'cardImage' && valueElement.length > 0) {
      customReturn = false;
    }

    if (nameElement === 'cardRare' && valueElement.length > 0) {
      customReturn = false;
    }

    return customReturn;
  }

  // fim métodos de validação de inputs

  render() {
    const { // destructuring dos elementos do state (lint exigiu)
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      arrCards,
    } = this.state;

    return (
      <div>
        <div className="new-card">
          <Form // passando via props cada elemento do state  + funções
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            showDeleteButtonCard="false" // boolean me exigiria uma var (lint)
          />
        </div>
        <div className="cartas">
          { arrCards.map((card, index) => (<Card
            key={ index }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardImage={ card.cardImage }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
            onDeleteButtonClick={ this.onDeleteButtonClick }
            showDeleteButtonCard="true"
          />)) }
        </div>
      </div>
    );
  }
}

export default App;
