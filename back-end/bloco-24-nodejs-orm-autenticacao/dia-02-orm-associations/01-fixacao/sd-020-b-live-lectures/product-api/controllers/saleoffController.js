const express = require('express');
const saleoffService = require('../services/saleoffService');
const productService = require('../services/productService');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, discount, startDate, endDate } = req.body;

  const start = new Date(startDate);
  const end = new Date(endDate);

  try {
    const result = await saleoffService.create({ name, discount, startDate: start, endDate: end });
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.post('/:id/products', async (req, res) => {
  try {
    const { productIds } = req.body;

    const saleoff = await saleoffService.findByPk(req.params.id);

    if (!saleoff) {
      return res.status(404).send({ message: 'Liquidação não encontrada' });
    }

    const products = await productService.findProducts(productIds);

    await saleoff.addProducts(products);

    res.status(200).json({ message: 'Produtos adicionados com sucesso' });
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ message: 'Algo deu errado' });
  }
});


router.get('/', async (req, res, next) => {
  try {
    const result = await saleoffService.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const result = await saleoffService.findByPk(req.params.id);
    if (result === null) {
      return res.status(404).send({ message: 'Liquidação não encontrado' });
    }
    res.status(200).json(result);
  } catch (error) {
     res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await saleoffService.destroy(req.params.id);
    res.status(200).send({ message: 'Liquidação excluído com sucesso.' });
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, discount, startDate, endDate } = req.body;

  try {
    const result = await saleoffService.update({ id: req.params.id, name, discount, startDate, endDate });
    res.status(200).send({ message: 'Liquidação atualizada com sucesso.' });
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

module.exports = router;