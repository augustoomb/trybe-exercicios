const phraseModel = require('../models/phrases');
const userModel = require('../models/user');

const getAll = async () => {
  const result = await phraseModel.getAll();
  return result;
};

const getById = async (id) => {
  const result = await phraseModel.getById(id);
  return result;
};

const create = async ({ phrase, authorId }) => {
  const result = await phraseModel.create({ phrase, authorId });
  return result;
};

module.exports = { create, getAll, getById };