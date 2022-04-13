module.exports = (sequelize, DataType) => {
  const NombrePuesto = sequelize.define('nombre_puesto', {
    nombre_puesto_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataType.STRING
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return NombrePuesto
}