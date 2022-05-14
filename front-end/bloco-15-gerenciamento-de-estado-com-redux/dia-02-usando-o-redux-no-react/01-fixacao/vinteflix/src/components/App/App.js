import React from 'react';
import MainContent from '../MainContent/MainContent';
import SideBar from '../SideBar/SideBar';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <h1>VinteFlix</h1>
        <main className="content-wrapper">
          <SideBar/>
          <MainContent/>
        </main>
      </div>
    );
  }
}

export default App;
