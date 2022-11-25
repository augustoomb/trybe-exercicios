import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/slices/wallet";

const { useRef } = require("react");

export default function ExpensesInsertForm(){
  // custom hooks
  const nameElement = useRef();
  const currencyElement = useRef();
  const valueElement = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addExpense({
      name: nameElement.current.value,
      currency: currencyElement.current.value,
      value: valueElement.current.value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name: <input id="name" ref={nameElement} />
        </label>
        <label htmlFor="currency">
          Currency: <input id="currency" ref={currencyElement} />
        </label>
        <label htmlFor="value">
          Value: <input id="value" ref={valueElement} />
        </label>
        <button type="submit">Inserir Despesa</button>
    </form>
  )
}