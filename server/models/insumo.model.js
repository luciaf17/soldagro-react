module.exports = (sequelize, DataType) => {
  const Insumo = sequelize.define('insumo', {
    insumo_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataType.STRING,
      allowNull: false
    },
    calidad: {
      type: DataType.STRING,
    },
    unidad_medida: {
      type: DataType.STRING,
    },
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Insumo
}