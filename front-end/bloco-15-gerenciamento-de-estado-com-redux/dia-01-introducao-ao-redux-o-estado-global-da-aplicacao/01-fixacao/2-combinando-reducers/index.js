const Redux = require('redux');
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

/*
combineReducers: 
Essa função recebe um objeto como parâmetro contendo cada um dos seus reducers como elementos
*/

const reducerCombinado = Redux.combineReducers({
  meuReducer,
  meuOutroReducer
});

export default reducerCombinado;