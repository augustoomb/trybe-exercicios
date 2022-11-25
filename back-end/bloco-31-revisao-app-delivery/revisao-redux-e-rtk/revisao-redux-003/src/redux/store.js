// import {createStore} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const INITIAL_STATE = { count: 10 };
// const reducer = ( state=INITIAL_STATE, action ) => {
//     switch( action.type ){
//       case 'MAIS':
//         return {count: state.count + action.payload}
//       case 'MENOS':
//         return {count: state.count + action.payload}
//       default:
//         return state;
//     }
// }

// const store = createStore(
//   reducer,
//   composeWithDevTools()
// );

// export default store;


import { configureStore } from '@reduxjs/toolkit'
import counter from './counter';
import user from './user';

const store = configureStore({
  reducer: {
    counter,
    user
  },
});

export default store;
