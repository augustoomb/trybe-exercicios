const INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const reducerProForm = (state = INITIAL_STATE, action) => {
  if (action.type === 'SAVE_PROFESSIONAL_FORM') {
    return {
      ...state,
      curriculo: action.curriculo,
      cargo: action.cargo,
      descricao: action.descricao,
    };
  }

  return state;
};

export default reducerProForm;
