/*
2º passo: Aqui eu crio um dos meus reducers. Poderia ter vários, pois lá no reducers/index, temos
um 'combineReducers', que vai combinar todos os reducers criados.
*/

const INITIAL_STATE = {
  state: '',
};

// action  deve ser um objeto e possuir a key type. É essa key que define como o reducer vai manipular o estado.
function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default myReducer;