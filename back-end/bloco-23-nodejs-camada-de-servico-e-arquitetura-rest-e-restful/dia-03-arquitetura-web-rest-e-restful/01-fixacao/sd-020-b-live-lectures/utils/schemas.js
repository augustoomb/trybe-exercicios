const joi = require('joi');

const schemaCustomer = joi.object().keys({
	name: joi.string().max(100).min(1).required(),
	cpf: joi.string().length(11).pattern(/\d+/).required(),
	email: joi.string().email().required(),
	password: joi.string().max(16).min(8).required()
})

const schemaBuySell = joi.object().keys({ 
  amountBRL: joi.number().precision(2).required(),
})

function validator(schema, body) {
  const { error } = schema.validate(body);

  if(error) {
    throw { code: 400, message: error.details[0].message }
  }
}

module.exports = { schemaBuySell, validator }