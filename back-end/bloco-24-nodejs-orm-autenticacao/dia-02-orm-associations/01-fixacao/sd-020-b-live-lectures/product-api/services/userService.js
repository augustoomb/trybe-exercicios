const { User } = require('../models');

const create = async ({ name, username, email, password }) => {
    const result = await User.create({ name, username, email, password });
    return result;
};

const findAll = async () => {
    const result = await User.findAll();
    return result;
};

const findByPk = async (id) => {
    const result = await User.findByPk(id);
    return result;
};

const destroy = async (id) => {
    const result = await User.destroy({
        where: {
            id: id
        }
    });
    return result;
};

const update = async ({ id, name, username, email, password }) => {
    const result = await User.update(
        { name, username, email, password },
        {
            where: {
                id: id
            }
        }
    )

    return result;
};

module.exports = { create, findAll, findByPk, destroy, update }