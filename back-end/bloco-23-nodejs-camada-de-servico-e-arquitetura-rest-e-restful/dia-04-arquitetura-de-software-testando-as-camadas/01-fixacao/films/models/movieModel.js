// 2º CRIANDO O MODEL NORMALMENTE. PARA TESTAR O BANCO DE DADOS EM SI, VOU MOCKAR.

const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      "INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  // result = [{ insertId: 1 }]   (testes)

  return {
    id: result.insertId,
  };

  /*  (testes)

  return {
    id: 1,
  };

  */
};

module.exports = {
  create,
};
