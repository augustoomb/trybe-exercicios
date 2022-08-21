const connection = require('./connection');

const getByUsername = async (username) => {
  const [result] = await connection.execute(
    'SELECT * FROM users WHERE username = ?;', [username],
  );
  return result[0];
};

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM users WHERE id = ?;', [id],
  );
  return result[0];
};

const create = async ({ username, password }) => {
  const [result] = await connection.execute(
    'INSERT INTO users (username, password) VALUES (?, ?);', [username, password],
  );
  return { id: result.insertId, username, password };
};

module.exports = { create, getByUsername, getById };