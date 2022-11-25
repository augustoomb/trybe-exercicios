const { useRef } = require("react");

export default function ExpensesEditForm(){
  const nameElement = useRef();
  const currencyElement = useRef();
  const valueElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameElement, currencyElement, valueElement);
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Editar nova despesa</h1>
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