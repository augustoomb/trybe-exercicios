const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({ id, firstName, middleName, lastName }) => {

  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean) // https://stackoverflow.com/questions/30016773/javascript-filter-true-booleans
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

// Converte o nome dos campos de snake_case para camelCase (feito depois)...
// É apenas entregar os dados em cammel case e não da forma que vem do banco: vem_assim. Preciso que fiqueAssim
const serialize = (authorData) => authorData.map((item) => getNewAuthor({
  id: item.id,
  firstName: item.first_name,
  middleName: item.middle_name,
  lastName: item.last_name,
}));

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize).map(getNewAuthor); // uso o serialize que criei acima.
};

const findById = async (id) => {
  const query = `
    SELECT id, first_name, middle_name, last_name 
    FROM model_example.authors 
    WHERE id = ?
  `;

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return serialize(authorData)[0];
};

const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  );
  return [getNewAuthor({ id: author.insertId, firstName, middleName, lastName })];
};

const findByName = async (firstName, middleName, lastName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio
  let query = `
    SELECT id, first_name, middle_name, last_name 
    FROM model_example.authors
  `;

  if (middleName) {
    query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?';
  } else {
    query += 'WHERE first_name = ? AND last_name = ?';
  }

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];

  // Executamos a consulta e retornamos o resultado
  const [authorData] = await connection.execute(query, params);

  // Caso nenhum author seja encontrado, devolvemos null
  if (authorData.length === 0) return null;

  // Caso contrário, retornamos o author encontrado
  return serialize(authorData);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
  findByName,
};

/* 

O model Author exporta uma função getAll.
Essa função retornará todas as pessoas autoras cadastradas no banco de dados.
Utilizamos o método execute para fazer uma query mysql como já estamos acostumados.
Esse método retorna uma Promise que, quando resolvida, nos fornece um array com 2 campos:
[rows, fields]. O primeiro index é onde está a resposta que desejamos (no caso o Authors)
e no segundo vêm algumas informações extras sobre a query que não iremos utilizar.

*/

/*

Note que o retorno da consulta do banco não está no formato que desejamos (camelCase).
Criamos a serialize para isso:

*/