module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: DataTypes.STRING,
    price: DataTypes.INTEGER,
  },
    {
      timestamps: false,
      tableName: 'Plans',
      underscored: true,
    });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient,
      { foreignKey: 'plan_id', as: 'patients' });
  };

  return Plan;
};