const util = require('../utils/util');
const { emailIsValid } = util;

function checkNullFields(req, _res, next) {
  const { firstName, lastName, email, password } = req.body;
  if (firstName === undefined) {
    throw new Error('O campo "firstName" é obrigatório');
  }

  if (lastName === undefined) {
    throw new Error('O campo "lastName" é obrigatório');
  }

  if (email === undefined) {
    throw new Error('O campo "email" é obrigatório');
  }

  if (password === undefined) {
    throw new Error('O campo "password" é obrigatório');
  }

  next();
}

function passCheck(req, _res, next) {
  const { password } = req.body;
  if (password.length < 6) {
    throw new Error('O campo "password" deve ter 6 caracteres ou mais');
  }
  next();
}

function validateEmail(req, res, next) {
  const { email } = req.body;

  if (!emailIsValid(email)) {
    throw new Error('O e-mail informado é inválido');
  }

  next();
}

function checkBlankFields(req, _res, next) {
  const { firstName, lastName, email, password } = req.body;
  if (firstName === "") {
    throw new Error('O campo "firstName" não pode estar vazio');
  }

  if (lastName === "") {
    throw new Error('O campo "lastName" não pode estar vazio');
  }

  if (email === "") {
    throw new Error('O campo "email"  não pode estar vazio');
  }

  if (password === "") {
    throw new Error('O campo "password" não pode estar vazio');
  }

  next();
}

module.exports = {
  checkNullFields,
  passCheck,
  checkBlankFields,
  validateEmail,
}