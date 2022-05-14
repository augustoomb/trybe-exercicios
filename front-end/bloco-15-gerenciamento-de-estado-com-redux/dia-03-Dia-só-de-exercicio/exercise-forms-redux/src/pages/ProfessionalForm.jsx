import React, { Component } from 'react';
import { connect } from 'react-redux'; // importei
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { saveProfessionalForm } from '../redux/actions/action';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveForm = () => {
    const { curriculo, cargo, descricao } = this.state;

    const objProForm = { curriculo, cargo, descricao };

    const { dispatch, history } = this.props;

    dispatch(saveProfessionalForm(objProForm)); // chama a action

    history.push('/formdisplay');
  };

  render() {
    const { curriculo, cargo, descricao } = this.state;

    return (
      <fieldset>
        <div>
          <Link to="/">Personal Form</Link>
          &nbsp;
          <Link to="/formdisplay">Display Data</Link>
        </div>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button
          label="enviar"
          onClick={ () => this.saveForm() }
        />
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null)(ProfessionalForm);
