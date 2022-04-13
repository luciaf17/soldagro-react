module.exports = (sequelize, DataType) => {
  const Contenedor = sequelize.define('contenedor', {
    contenedor_id: {
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

  return Contenedor
}
