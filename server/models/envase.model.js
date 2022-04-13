module.exports = (sequelize, DataType) => {
  const Envase = sequelize.define('envase', {
    envase_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    producto_id: {
      type: DataType.INTEGER,
      allowNull: false
    },
    producto_tipo: {
      type: DataType.STRING,
    },
    capacidad: {
      type: DataType.INTEGER,
    },
    unidad_medida: {
      type: DataType.STRING,
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Envase
}
