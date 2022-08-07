const connection = require('./connection');

async function createUser(firstName, lastName, email, password) {
  const [createdUserInfo] = await connection.execute(
    `INSERT INTO crud_users.user (first_name, last_name, email, pass) VALUES (?, ?, ?, ?)`,
    [firstName, lastName, email, password]
  )
  return {
    id: createdUserInfo.insertId,
    firstName: firstName,
    lastName: lastName,
    email: email
  };
}

async function getAllUsers() {
  const [users] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM crud_users.user'
  )
  return users;
}

async function getUserById(id) {
  const [user] = await connection.execute(
    `SELECT id, first_name, last_name, email FROM crud_users.user WHERE id = ${id}`
  )
  return user;
}

async function updateUser(id, firstName, lastName, email, password) {
  const [user] = await connection.execute(
    `UPDATE crud_users.user SET first_name = ?, last_name = ?, email = ?, pass = ? WHERE id = ?`,
    [firstName, lastName, email, password, id]
  );
  return {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email
  };
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser
}
