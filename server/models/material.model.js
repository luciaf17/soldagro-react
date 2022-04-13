module.exports = (sequelize, DataType) => {
  const Material = sequelize.define('material', {
    material_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_material: {
      type: DataType.STRING,
      allowNull: false
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Material
}
