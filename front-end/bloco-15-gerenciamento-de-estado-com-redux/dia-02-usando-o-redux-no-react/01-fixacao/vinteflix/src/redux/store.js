// 1ª- criar store

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from '../data/vinteFlix';

const INITIAL_STATE = {
    categories,
    selectedMovie: categories[0].movies[0],
}

const reducer = (state = INITIAL_STATE , action) => {
  if(action.type === 'MUDAR_FILME'){
    return { ...state, selectedMovie: action.payload };
  }
  else {
    return state;
  }
}

const store = createStore( reducer, composeWithDevTools());

export default store;
