import React from 'react';

class TextAreaTeste extends React.Component {

  render() {
    const { value, setarValoresNoState } = this.props

    let error = undefined;
    if(value.length >120) {
      error = 'Texto muito grande';
    }

    return(
      <div>
        <textarea
        name='textAreaTeste' 
        value={value} 
        onChange={setarValoresNoState} 
        />
        <span>{ error!== undefined ? error : ''}</span>
      </div>
    );
  }

}

export default TextAreaTeste;