//importe o método applyMiddleware 
import { createStore, applyMiddleware } from 'redux';
//importe o redux-thunk
import thunk from 'redux-thunk'
import reducer from '../reducers';

//aplique o middleware
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
