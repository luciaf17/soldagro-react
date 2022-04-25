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
    marca: {
      type: DataType.STRING,
    },
    tamanio: {
      type: DataType.STRING,
    },
    unidad_medida: {
      type: DataType.STRING,
    },
    precio: {
      type: DataType.DOUBLE,
    },
    stock: {
      type: DataType.DOUBLE,
    },
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Insumo
}