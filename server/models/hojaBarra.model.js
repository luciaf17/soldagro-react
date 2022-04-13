module.exports = (sequelize, DataType) => {
  const HojaBarra = sequelize.define('hoja_barra', {
    hoja_barra_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataType.STRING,
      allowNull: false
    },
    largo: {
      type: DataType.INTEGER,
    },
    ancho: {
      type: DataType.INTEGER,
    },
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return HojaBarra
}
