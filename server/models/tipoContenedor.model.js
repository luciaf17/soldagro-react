module.exports = (sequelize, DataType) => {
  const TipoContenedor = sequelize.define('tipo_contenedor', {
    tipo_contenedor_id: {
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

  return TipoContenedor
}