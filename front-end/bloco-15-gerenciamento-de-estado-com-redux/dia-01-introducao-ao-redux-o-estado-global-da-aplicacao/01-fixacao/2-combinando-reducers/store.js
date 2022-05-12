const Redux = require('redux');
// Importando o reducer combinado que fiz no index
import reducerCombinado from './index.js';

const store = Redux.createStore(reducerCombinado);

console.log(store.getState())

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}
