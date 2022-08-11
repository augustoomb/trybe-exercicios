const joi = require('joi');

const schemaCustomer = joi.object().keys({
	name: joi.string().max(100).min(1).required(),
	cpf: joi.string().length(11).pattern(/\d+/).required(),
	email: joi.string().email().required(),
	password: joi.string().max(16).min(8).required()
})

const { error } = schemaCustomer.validate({
	"name": "B",
	"cpf": "12345678910",
	"email": "andre@trybe.com",
	"password": "tryasdfasdf"
})

if (error) {
 throw { code: 400, message: error.details[0].message }
}

console.log('Cadastrado com sucesso!')