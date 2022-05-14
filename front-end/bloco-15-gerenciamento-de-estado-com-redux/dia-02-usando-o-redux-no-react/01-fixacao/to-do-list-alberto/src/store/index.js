// 1º criar store vazia

// 4º voltar aqui com o reduce

import { combineReducers, createStore } from 'redux';
import listReducer from '../reduces/index';

const rootReducer = combineReducers({ listReducer }) // usando object shorthand

const store = createStore(rootReducer);

export default store;
