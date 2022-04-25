module.exports = (sequelize, DataType) => {
  const TipoPuesto = sequelize.define('tipo_puesto', {
    tipo_puesto_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataType.STRING
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return TipoPuesto
}