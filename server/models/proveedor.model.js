module.exports = (sequelize, DataType) => {
  const Proveedor = sequelize.define('proveedor', {
    proveedor_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataType.STRING,
      allowNull: false
    },
    direccion: {
      type: DataType.STRING,
    },
    telefono: {
      type: DataType.INTEGER,
    },
    email: {
      type: DataType.STRING,
    },
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Proveedor
}
