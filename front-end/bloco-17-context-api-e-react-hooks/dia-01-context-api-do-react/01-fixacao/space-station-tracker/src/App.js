import React from 'react';
import './App.css';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';

// const { Consumer } = ISSContext;
// import { Consumer } from './context/ISSContext';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ISSLocation />
      </div>
    );
  }
}

export default App;
