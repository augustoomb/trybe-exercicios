import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counter';

import './App.css';

function App() {

  // connect + mapStateToProps
  // useSelector
  // const mapStateToProps = (state) => ({
  //   count: state.count
  // })
  const name = useSelector( ({user}) => (user.name) );

  const count = useSelector( (state) => {
    return state.counter.count;
  } );
  // console.log(this.props);
  const dispatch = useDispatch();

  const changeCount = (number) => {
    // count + plus
    if(number > 0)
      dispatch(increment())
    else
      dispatch(decrement())
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>Counter: {count}</h1>
      <div styles={{display: 'flex'}}>
        <button onClick={() => changeCount(-1)}>-1</button>
        <button onClick={() => changeCount(+1)}>+1</button>
      </div>
    </div>
  );
}

export default App;
