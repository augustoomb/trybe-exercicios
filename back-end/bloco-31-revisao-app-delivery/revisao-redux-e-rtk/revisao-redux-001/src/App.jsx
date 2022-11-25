import React from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends React.Component{
  render() {
    console.log(this.props);

    const changeCount = (number) => {
      // count + plus
      if(number > 0)
        this.props.dispatch({type: 'MAIS', payload: number})
      else
      this.props.dispatch({type: 'MENOS', payload: number})
    }

    return (
      <div className="App">
        <h1>Counter: {this.props.count}</h1>
        <div styles={{display: 'flex'}}>
          <button onClick={() => changeCount(-1)}>-1</button>
          <button onClick={() => changeCount(+1)}>+1</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count
})
export default connect(mapStateToProps)(App);
