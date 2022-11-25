import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

function App() {

  // connect + mapStateToProps
  // useSelector
  // const mapStateToProps = (state) => ({
  //   count: state.count
  // })
  const count = useSelector( ({count}) => count );
  // console.log(this.props);
  const dispatch = useDispatch();

  const changeCount = (number) => {
    // count + plus
    if(number > 0)
      dispatch({type: 'MAIS', payload: number})
    else
      dispatch({type: 'MENOS', payload: number})
  }

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div styles={{display: 'flex'}}>
        <button onClick={() => changeCount(-1)}>-1</button>
        <button onClick={() => changeCount(+1)}>+1</button>
      </div>
    </div>
  );
}

export default App;
