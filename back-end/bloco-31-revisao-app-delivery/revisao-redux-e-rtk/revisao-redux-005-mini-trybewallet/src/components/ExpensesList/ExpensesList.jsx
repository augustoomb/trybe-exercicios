import { useSelector } from "react-redux";

export default function ExpensesList(){

  const expenses = useSelector( ({wallet}) => (wallet.expenses) );

  const handleEdit = (e) => {
    e.preventDefault();
  }

  const handleDelete = (e) => {
    e.preventDefault();
  }

  return (
    <table width="100%" border="1">
      <thead>
        <tr>
          <td>#id</td>
          <td>name</td>
          <td>currency</td>
          <td>value</td>
          <td>actions</td>
        </tr>
      </thead>
      <tbody>
        {!expenses?.length && <tr><td colSpan="5">Nenhum registor encontrado!</td></tr>}
        
        {expenses?.length > 0 &&
          expenses.map( expense => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.name}</td>
              <td>{expense.currency}</td>
              <td>{expense.value}</td>
              <td>
                <button onClick={handleEdit}>edit</button>
                <button onClick={handleDelete}>delete</button>
              </td>
            </tr>
          ))
          
        }
      </tbody>
    </table>
  )
}