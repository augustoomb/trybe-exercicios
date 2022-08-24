const express = require('express');
const userService = require('../services/userService');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    const result = await userService.create({ name, username, email, password });
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.get('/', async (req, res, next) => {
  try {
    const result = await userService.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const result = await userService.findByPk(req.params.id);
    if (result === null) {
      return res.status(404).send({ message: 'Pessoa usuária não encontrada' });
    }
    //res.status(200).json(result);

    if(!req.query.includeProducts) return res.status(200).json(result);
    return result.getProducts().then((products) => {
      res.status(200).json({...result.dataValues, products});
    });

  } catch (error) {
     res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await userService.destroy(req.params.id);
    res.status(200).send({ message: 'Pessoa usuária excluída com sucesso.' });
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    const result = await userService.update({ id: req.params.id, name, username, email, password });
    res.status(200).send({ message: 'Pessoa usuária atualizada com sucesso.' });
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

module.exports = router;