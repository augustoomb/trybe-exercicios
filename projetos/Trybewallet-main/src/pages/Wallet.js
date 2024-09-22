import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, fetchData, deleteExpense } from '../actions';
import '../style/Wallet.css';
import logo from '../images/logo.png';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: 'USD',
      metPag: 'Dinheiro',
      tag: 'Lazer',
      lastCreatedId: -1,
    };
  }

  componentDidMount = () => { // ao iniciar componente, chamar a API para preencher o select
    const { dispatch } = this.props;
    dispatch(fetchAPI());
  }

  getExValue = (itemExp) => {
    const { currency, exchangeRates } = itemExp;
    const exValue = exchangeRates[currency].ask;
    return parseFloat(exValue);
  }

  getNameCurrency = (itemExp) => { // recebe a posição correta no arr de expenses
    const { currency, exchangeRates } = itemExp;
    const { name } = exchangeRates[currency];
    return name.split('/')[0]; // divide a string exatamente na "/". Vira um arr de 2 posiçoes. // ... peguei a posição 0
  }

  cleanLocalState = () => {
    this.setState({
      valor: '',
      descricao: '',
      moeda: '',
      metPag: 'Cartão de crédito',
      tag: 'Alimentação',
    });
  }

  sumValues = (expenses) => {
    let total = 0;
    if (expenses.length > 0) {
      for (let i = 0; i < expenses.length; i += 1) {
        const ask = (parseFloat(expenses[i].exchangeRates[expenses[i].currency].ask));
        const value = parseFloat(expenses[i].value);
        total += (ask * value);
      }
    }
    return total.toFixed(2);
  }

  handleSubmit = () => { // clique do botão adicionar despesa
    const { valor, descricao, moeda, metPag, tag, lastCreatedId } = this.state;
    const { dispatch } = this.props;
    const newId = lastCreatedId + 1;

    this.setState({
      lastCreatedId: newId,
    });
    const objExpense = {
      id: newId,
      value: valor,
      description: descricao,
      currency: moeda,
      method: metPag,
      tag,
    };

    // dispatch({ type: 'SAVE_EXPENSE', objExpense });
    dispatch(fetchData(objExpense));

    this.cleanLocalState();
  }

  handleChange = ({ target }) => { // alteração nos inputs altera o state local
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  convertValue = (curr, exValue) => (curr * exValue).toFixed(2); // recebe o currency já convertido para float e o cambio

  deleteExp = (exp) => {
    const { dispatch } = this.props;
    dispatch(deleteExpense(exp));
  }

  render() {
    const { email, currencies, isLoading, expenses } = this.props;
    const { valor, descricao, moeda, metPag, tag } = this.state;
    const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <div>
        <header>
          <img src={ logo } alt="logo" />
          <span className="email" data-testid="email-field">{ email }</span>
          <div className="total">
            <span data-testid="total-field">
              {
                expenses
                  ? (
                    this.sumValues(expenses)
                  )
                  : 0
              }
            </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
        <form>
          Valor: &nbsp;
          <input
            type="number"
            value={ valor }
            onChange={ this.handleChange }
            name="valor"
            data-testid="value-input"
          />
          Descrição: &nbsp;
          <input
            type="text"
            value={ descricao }
            onChange={ this.handleChange }
            name="descricao"
            data-testid="description-input"
          />
          <label htmlFor="moeda">
            Moeda: &nbsp;
            <select
              name="moeda"
              id="moeda"
              value={ moeda }
              onChange={ this.handleChange }
            >
              {
                !isLoading && currencies
                  ? (
                    currencies.map((currency, index) => (
                      <option key={ index }>{ currency }</option>
                    ))
                  )
                  : <div>Loading...</div>
              }
            </select>
          </label>
          <label htmlFor="metPag">
            Método de pagamento: &nbsp;
            <select
              name="metPag"
              id="metPag"
              data-testid="method-input"
              value={ metPag }
              onChange={ this.handleChange }
            >
              {
                pagamento.map((pag, index) => (
                  <option key={ index }>{ pag }</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="tag">
            Tag: &nbsp;
            <select
              name="tag"
              id="tag"
              data-testid="tag-input"
              value={ tag }
              onChange={ this.handleChange }
            >
              {
                tags.map((t, index) => (
                  <option key={ index }>{ t }</option>
                ))
              }
            </select>
          </label>
          <button type="button" onClick={ this.handleSubmit }>Adicionar despesa</button>
        </form>
        <table className="table">
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {
            expenses.map((exp) => (
              <tr key={ exp.id }>
                <td>{ exp.description }</td>
                <td>{ exp.tag }</td>
                <td>{ exp.method }</td>
                <td>{ (parseFloat(exp.value)).toFixed(2) }</td>
                <td>{ this.getNameCurrency(exp) }</td>
                <td>{ this.getExValue(exp).toFixed(2) }</td>
                <td>
                  { this.convertValue((parseFloat(exp.value)), this.getExValue(exp)) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    onClick={ () => this.deleteExp(exp) }
                    type="button"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  isLoading: state.wallet.isLoading,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.objectOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Wallet);
