module.exports = (sequelize, DataType) => {
  const Despacho = sequelize.define('despacho', {
    despacho_id: {
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

  return Despacho
}