const Joi = require('joi');

const schemaUsername = Joi.object({
  username: Joi.string()
    .min(5)
    .required(),
});

const schemaPassword = Joi.object({
  password: Joi.string()
    .min(5)
    .required(),
});

module.exports = {
  schemaUsername, schemaPassword,
};