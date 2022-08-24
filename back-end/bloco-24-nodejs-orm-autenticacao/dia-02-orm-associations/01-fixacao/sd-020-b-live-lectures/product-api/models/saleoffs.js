const Saleoff = (sequelize, DataTypes) => {
  const Saleoff = sequelize.define('Saleoff', {
    name: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  });

  return Saleoff;
};

module.exports = Saleoff;