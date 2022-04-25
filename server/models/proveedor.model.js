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
    localidad: {
      type: DataType.STRING,
    },
    contacto: {
      type: DataType.STRING,
    },
    cuit: {
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
