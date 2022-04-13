module.exports = (sequelize, DataType) => {
  const Cliente = sequelize.define('cliente', {
    cliente_id: {
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
    contacto: {
      type: DataType.STRING,
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Cliente
}