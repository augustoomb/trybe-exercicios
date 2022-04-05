import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='Pokemon'>
        <p> { name } </p>
        <p> { type } </p>
        <p> { averageWeight.value } { averageWeight.measurementUnit }</p>
        <img src={ image } alt={ name }></img>
        <hr></hr>
      </div>      
    );
  }
}

Pokemon.PropTypes.shape({ // validação do tipo objeto
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight:PropTypes.exact({ // também usado para validação do tipo objeto
		value: PropTypes.number,
		measurementUnit: PropTypes.string,
  }),
  image: PropTypes.string
}) 

export default Pokemon;