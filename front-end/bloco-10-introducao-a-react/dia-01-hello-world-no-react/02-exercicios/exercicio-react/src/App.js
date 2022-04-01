// import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{ value }</li>
  );
}

function App() {
  const arrCompromissos = ['tomar café', 'ler conteúdo do course', 'fazer exercícios', 'tomar banho'];
  return (
    <div className="App">
      <h1>Chamando minha função task:</h1>
      <ul>
        { arrCompromissos.map((compromisso) => task(compromisso)) }
      </ul>
    </div>
  );
}

export default App;
