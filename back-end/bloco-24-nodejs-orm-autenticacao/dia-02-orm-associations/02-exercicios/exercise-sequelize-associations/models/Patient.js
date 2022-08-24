module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patient_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: DataTypes.STRING,
    plan_id: { type: DataTypes.INTEGER, foreignKey: true },
  },
    {
      timestamps: false,
      tableName: 'Patients',
      underscored: true,
    });

  // da relação de 1 -> n com plan, aqui é o "lado 1". Na tabela do banco, é nessa entidade que fica a FK
  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan,
      { foreignKey: 'plan_id', as: 'plans' });
  };

  return Patient;
};