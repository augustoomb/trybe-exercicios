const connection = require('./connection');

async function getAddressByCep(cep) {

  const [addressData] = await connection.execute(
    `SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ${cep}`
  );

  return addressData[0];
}

module.exports = {
  getAddressByCep,
}