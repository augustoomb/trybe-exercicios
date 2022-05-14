// 2º criando reducer

// preciso definir um estado para caso ele chegue aqui vazio
const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value]; // adicionando um novo elemento ao estado
    default:
      return state;
  }
}

export default listReducer;
