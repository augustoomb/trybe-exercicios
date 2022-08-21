const userService = require('../services/user');

const ERROR_500 = 'Algo errado aconteceu';

const getByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const result = await userService.getByUsername(username);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: ERROR_500 });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(422).json({ message: 'id não passado' });
    const result = await userService.getById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: ERROR_500 });
  }
};

const create = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await userService.create({ username, password });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: ERROR_500 });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await userService.login({ username, password });
    if (!result) return res.status(401).json({ message: 'Você não deveria estar aqui' });
    res.status(200).json({ token: result });
  } catch (error) {
    return res.status(500).json({ message: ERROR_500 }); 
  }
};

module.exports = { create, getByUsername, getById, login };