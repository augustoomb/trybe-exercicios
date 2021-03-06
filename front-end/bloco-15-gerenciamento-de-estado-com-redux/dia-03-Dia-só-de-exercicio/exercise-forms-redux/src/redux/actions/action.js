export const saveProfessionalForm = (objProForm) => ({ // retorna um obj
  type: 'SAVE_PROFESSIONAL_FORM',
  curriculo: objProForm.curriculo,
  cargo: objProForm.cargo,
  descricao: objProForm.descricao,
});

// ao ser chamada(action), o reducer detecta e interage com o store
export const savePersonalForm = (objPersonalForm) => ({ // retorna um obj
  type: 'SAVE_PERSONAL_FORM',
  nome: objPersonalForm.nome,
  email: objPersonalForm.email,
  cpf: objPersonalForm.cpf,
  endereco: objPersonalForm.endereco,
  cidade: objPersonalForm.cidade,
  estado: objPersonalForm.estado,
});
