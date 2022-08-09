const cepModel = require('../models/cepModel');

// uso interno
function cepIsValid(cep) {
  const cepRegex = /^\d{5}-?\d{3}$/;

  if (!cepRegex.test(cep)) {
    return false;
  }

  return true;
}


const getAddressByCep = async (cep) => {
  if (!cepIsValid(cep)) {
    return {
      error: {
        status: 400,
        code: 'invalidData',
        message: `O CEP ${cep} é inválido`
      }
    }
  }

  const address = await cepModel.getAddressByCep(cep);

  return address;
}

module.exports = {
  getAddressByCep,
}