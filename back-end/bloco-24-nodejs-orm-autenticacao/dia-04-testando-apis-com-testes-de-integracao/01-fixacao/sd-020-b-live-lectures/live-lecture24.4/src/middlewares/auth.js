require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env;

if (!JWT_KEY) {
  const error = Error;
  error.message = 'JWT_KEY não foi definido no .env';
  throw error;
}

const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if(!authorization) return res.status(401).json({message: "A requisição necessita de um token válido"});

    const { username } = jwt.verify(authorization, JWT_KEY);

    const user = await User.findOne({ where: { username } });

    if (!authorization || !username || !user) throw Error;

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao acessar o endpoint',
      error: 'É necessário um token válido para acessar esse endpoint',
    });
  }
};
