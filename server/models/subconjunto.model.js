module.exports = (sequelize, DataType) => {
  const Subconjunto = sequelize.define('subconjunto', {
    subconjunto_id: {
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

  return Subconjunto
}