const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const reducerPersonalForm = (state = INITIAL_STATE, action) => {
  if (action.type === 'SAVE_PERSONAL_FORM') {
    return {
      ...state,
      nome: action.nome,
      email: action.email,
      cpf: action.cpf,
      endereco: action.endereco,
      cidade: action.cidade,
      estado: action.estado,
    };
  }

  return state;
};

export default reducerPersonalForm;
