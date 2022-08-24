const SaleoffProducts = (sequelize, DataTypes) => {
    const SaleoffProducts = sequelize.define(
      'SaleoffProducts',
      {},
      { timestamps: false }
    );
  
    SaleoffProducts.associate = (models) => {
      models.Product.belongsToMany(models.Saleoff, {
        as: 'saleoffs',
        through: SaleoffProducts,
        foreignKey: 'productId',
        otherKey: 'saleoffId',
      });
  
      models.Saleoff.belongsToMany(models.Product, {
        as: 'products',
        through: SaleoffProducts,
        foreignKey: 'saleoffId',
        otherKey: 'productId',
      });
    };
  
    return SaleoffProducts;
  };
  
  module.exports = SaleoffProducts;