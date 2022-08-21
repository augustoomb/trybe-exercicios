const phraseService = require('../services/phrases');

const ERROR_500 = 'Algo errado aconteceu';

const getAll = async (req, res) => {
  try {
    const result = await phraseService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await phraseService.getById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: ERROR_500 });
  }
};

const create = async (req, res) => {
  try {
    const { phrase } = req.body;
    const { userId } = req;
    // userId-2
    const result = await phraseService.create({ phrase, authorId: userId });
    
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: ERROR_500 });
  }
};

module.exports = { create, getAll, getById };