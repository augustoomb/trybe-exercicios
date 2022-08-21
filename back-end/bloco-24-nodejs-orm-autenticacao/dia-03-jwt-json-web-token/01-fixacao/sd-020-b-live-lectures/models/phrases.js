const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM phrases',
  );
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM phrases WHERE id = ?;', [id],
  );
  return result[0];
};

const create = async ({ phrase, authorId }) => {
  const [result] = await connection.execute(
    'INSERT INTO phrases (phase, author_id) VALUES (?, ?);', [phrase, authorId],
  );
  return { id: result.insertId, phrase, authorId };
};

module.exports = { create, getAll, getById };