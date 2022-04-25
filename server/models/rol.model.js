module.exports = (sequelize, DataType) => {
  const Rol = sequelize.define('rol', {
    rol_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataType.STRING,
      allowNull: false
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Rol
}