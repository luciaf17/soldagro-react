module.exports = (sequelize, DataType) => {
  const Puesto = sequelize.define('puesto', {
    puesto_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataType.STRING,
    },
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )
  return Puesto
}