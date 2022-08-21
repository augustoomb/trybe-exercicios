const bcrypt = require('bcryptjs');
const tokenHelper = require('../helpers/tokenHelper');
const userModel = require('../models/user');

const getByUsername = async (username) => {
  const result = await userModel.getByUsername(username);
  return result;
};

const getById = async (id) => {
  const result = await userModel.getById(id);
  return result;
};

const create = async ({ username, password }) => {
  const salt = bcrypt.genSaltSync(10);
  console.log('salt', salt);
  const passwordHash = bcrypt.hashSync(password, salt);
  console.log('passwordHash', passwordHash);
  const result = await userModel.create({ username, password: passwordHash });
  return result;
};

const login = async ({ username, password }) => {
  const user = await userModel.getByUsername(username);
  
  if (!bcrypt.compareSync(password, user.password)) {
    return null;
  }
  const token = tokenHelper.createToken({ id: user.id });

  return token;
};

module.exports = { create, getByUsername, getById, login };