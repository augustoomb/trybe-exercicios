// const bcrypt = require('bcryptjs');

const loginValidations = require('../utils/loginValidations');
const { schemaUsername, schemaPassword } = loginValidations;

const tokenHelper = require('../utils/tokenHelper');
const { createToken } = tokenHelper;

const login = async (username, password) => {
  const checkUsername = schemaUsername.validate({ username });

  if (checkUsername.error) {
    return {
      error: {
        statusCode: 500,
        message: checkUsername.error.details[0].message,
      }
    };
  }

  const checkPassword = schemaPassword.validate({ password });

  if (checkPassword.error) {
    return {
      error: {
        statusCode: 500,
        message: checkPassword.error.details[0].message,
      }
    };
  }

  return createToken(username, password);
};

module.exports = { login };