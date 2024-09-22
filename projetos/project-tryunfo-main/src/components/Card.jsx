import React from 'react';
import PropTypes from 'prop-types';
import '../style/Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, onDeleteButtonClick, showDeleteButtonCard,
    } = this.props;

    return (
      <div className="componente-card">
        <div className="conteudo-componente-card">
          <h2 className="titulo-card">
            { showDeleteButtonCard === 'false' ? 'Pré-visualização' : 'Carta' }
          </h2>
          <div className="card">
            <div className="div-t-card">
              <p data-testid="name-card" id="name-card">{ cardName }</p>
            </div>
            <img
              className="img-card"
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
            <p data-testid="description-card">{ cardDescription }</p>
            <p data-testid="attr1-card">{ cardAttr1 }</p>
            <p data-testid="attr2-card">{ cardAttr2 }</p>
            <p data-testid="attr3-card">{ cardAttr3 }</p>
            <p data-testid="rare-card">{ cardRare }</p>
            { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
            {
              showDeleteButtonCard === 'true'
                ? (
                  <button
                    name="deleteUButton"
                    type="button"
                    data-testid="delete-button"
                    onClick={ onDeleteButtonClick }
                  >
                    Excluir
                  </button>)
                : null
            }
          </div>
        </div>
      </div>
    );
  }
} // fim class

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  onDeleteButtonClick: PropTypes.func,
  showDeleteButtonCard: PropTypes.string,
};

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  onDeleteButtonClick: () => {},
  showDeleteButtonCard: 'false',
};

export default Card;
