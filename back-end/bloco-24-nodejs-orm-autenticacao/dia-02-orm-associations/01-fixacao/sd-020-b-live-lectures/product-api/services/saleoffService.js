const { Saleoff, Product } = require('../models');
const { findProducts } = require('./productService');

const create = async ({ name, discount, startDate, endDate }) => {
  const result = await Saleoff.create({ name, discount, startDate, endDate });
  return result;
};

const findAll = async () => {
  const result = await Saleoff.findAll();
  return result;
};

const findByPk = async (id) => {
  const result = await Saleoff.findByPk(id,
    { include: { model: Product, as: 'products', through: { attributes: [] } } });
  // through: aula 24.2 - 1:38
  return result;
};

const destroy = async (id) => {
  const result = await Saleoff.destroy({
    where: {
      id: id,
    },
  });
  return result;
};

const update = async ({ id, name, discount, startDate, endDate }) => {
  const result = await Saleoff.update(
    { name, discount, startDate, endDate },
    {
      where: {
        id: id,
      },
    }
  )
  return result;
};

module.exports = { create, findAll, findByPk, destroy, update }