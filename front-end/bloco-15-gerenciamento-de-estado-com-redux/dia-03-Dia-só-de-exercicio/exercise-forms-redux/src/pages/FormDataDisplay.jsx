import React, { Component } from 'react';
import { connect } from 'react-redux'; // importei
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class FormDataDisplay extends Component {
  render() {
    const { nome, email, cpf, endereco, cidade,
      estado, curriculo, cargo, descricao } = this.props;

    return (
      <div>
        <div>
          <Link to="/">Personal Form</Link>
          &nbsp;
          <Link to="/professionalform">Professional Form</Link>
        </div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

// export default FormDataDisplay;

const mapStateToProps = (state) => ({
  nome: state.reducerPersonalForm.nome,
  email: state.reducerPersonalForm.email,
  cpf: state.reducerPersonalForm.cpf,
  endereco: state.reducerPersonalForm.endereco,
  cidade: state.reducerPersonalForm.cidade,
  estado: state.reducerPersonalForm.estado,
  curriculo: state.reducerProForm.curriculo,
  cargo: state.reducerProForm.cargo,
  descricao: state.reducerProForm.descricao,
});

FormDataDisplay.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  curriculo: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);
