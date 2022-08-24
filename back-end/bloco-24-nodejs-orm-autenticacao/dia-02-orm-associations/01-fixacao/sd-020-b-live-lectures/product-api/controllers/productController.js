const express = require('express');
const productService = require('../services/productService');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, description, price, userId } = req.body;

  try {
    const result = await productService.create({ name, description, price, userId });
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.get('/', async (req, res, next) => {
  try {
    const result = await productService.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const result = await productService.findByPk(req.params.id);
    if (result === null) {
      return res.status(404).send({ message: 'Produto não encontrado' });
    }
    res.status(200).json(result);
  } catch (error) {
     res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await productService.destroy(req.params.id);
    res.status(200).send({ message: 'Produto excluído com sucesso.' });
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const result = await productService.update({ id: req.params.id, name, description, price });
    res.status(200).send({ message: 'Produto atualizado com sucesso.' });
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

module.exports = router;