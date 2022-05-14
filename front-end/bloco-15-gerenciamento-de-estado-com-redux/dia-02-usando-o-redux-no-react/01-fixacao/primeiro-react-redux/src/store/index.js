/* 1º passo: criação da store
Dica1: A função createStore sempre receberá como parâmetro um rootReducer
Dica2: composeWithDevTools é para usar a extensão do chrome
*/

import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,  composeWithDevTools());

export default store;