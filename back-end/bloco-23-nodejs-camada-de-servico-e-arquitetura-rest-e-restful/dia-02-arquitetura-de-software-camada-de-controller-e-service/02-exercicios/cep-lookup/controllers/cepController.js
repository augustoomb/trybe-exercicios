const cepService = require('../services/cepService');

const ping = (_req, res) => {
  res.status(200).json({ "message": "pong!" });
}

const getAddressByCep = async (req, res, next) => {
  const { cep } = req.params;

  const address = await cepService.getAddressByCep(cep);

  if (address.error) return next(address.error); // volta lá pro index, onde está o middleware de erro

  return res.status(200).json(address);
}

module.exports = {
  ping,
  getAddressByCep,
}