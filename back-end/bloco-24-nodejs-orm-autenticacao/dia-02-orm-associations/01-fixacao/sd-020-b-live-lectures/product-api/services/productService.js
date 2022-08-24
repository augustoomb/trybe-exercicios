const { User, Product } = require('../models');

const create = async ({ name, description, price, userId }) => {
    const result = await Product.create({ name, description, price, userId });
    return result;
};


const findAll = async () => {
    const result = await Product.findAll();
    return result;
};

const findProducts = async (productsId) => {
  const result = await Product.findAll({
    where: { id: productsId },
  });
  return result;
};

const findByPk = async (id) => {
    const result = await Product.findByPk(id,
       { include: { model: User, as: 'user', attributes: { exclude: ['password'] } }});
    return result;
};

const destroy = async (id) => {
    const result = await Product.destroy({
        where: {
          id: id,
        },
      });
    return result;
};

const update = async ({ id, name, description, price }) => {
    const result = await Product.update(
        { name, description, price },
        {
          where: {
            id: id,
          },
        }
      )
    return result;
};

module.exports = { create, findAll, findByPk, destroy, update, findProducts }