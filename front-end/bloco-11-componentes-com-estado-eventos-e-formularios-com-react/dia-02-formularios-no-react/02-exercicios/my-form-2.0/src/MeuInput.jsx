import React from 'react';
import PropTypes from 'prop-types';

class MeuInput extends React.Component {
  render() {

    const { name, value, type, placeholder, funcaoState } = this.props

    let error = undefined;
    if(name === 'nome' && value.length > 40) {
      error = 'Máximo 40 caracteres';
    }

    return(
      <div>
        <input name={name} value={value} type={type} placeholder={placeholder} onChange={funcaoState}>
        </input>
        <span>{ error !== undefined ? error : '' }</span>
      </div>
    );
  }
}

MeuInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MeuInput;