import React from 'react';
import '../style/Form.css';
import PropTypes from 'prop-types';

// &nbsp; dá um espaço depois do ultimo caracter: https://stackoverflow.com/questions/37909134/nbsp-jsx-not-working

class Form extends React.Component {
  render() {
    // destructuring para os props passados do App.js
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <div className="componente-formulario">
        <h2>Adicionar Nova Carta</h2>
        <form className="form">
          <label htmlFor="cardName" className="label">
            Nome: &nbsp;
            <input
              name="cardName"
              data-testid="name-input"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardDescription" className="label">
            Descrição: &nbsp;
            <textarea
              name="cardDescription"
              data-testid="description-input"
              type="text"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardAttr1" className="label">
            Attr01: &nbsp;
            <input
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardAttr2" className="label">
            Attr02: &nbsp;
            <input
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardAttr3" className="label">
            Attr03: &nbsp;
            <input
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardImage" className="label">
            Imagem: &nbsp;
            <input
              name="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardRare" className="label">
            Raridade: &nbsp;
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          {
            !hasTrunfo
              ? (
                <label htmlFor="cardTrunfo" className="label">
                  Super Trybe Trunfo: &nbsp;
                  <input
                    name="cardTrunfo"
                    data-testid="trunfo-input"
                    type="checkbox"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>)
              : <p>Você já tem um Super Trunfo em seu baralho</p>
          }
          <br />

          <button
            className="button-salvar"
            name="isSaveButtonDisabled"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
} // fim class

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  onInputChange: () => {}, // testar
  onSaveButtonClick: () => {}, // testar
};

export default Form;
