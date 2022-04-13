
module.exports = (sequelize, DataType) => {
  const Conjunto = sequelize.define('conjunto', {
    conjunto_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataType.STRING,
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Conjunto
}