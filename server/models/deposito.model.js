module.exports = (sequelize, DataType) => {
  const Deposito = sequelize.define('deposito', {
    deposito_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataType.STRING,
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )
  return Deposito
}