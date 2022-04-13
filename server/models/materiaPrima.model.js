module.exports = (sequelize, DataType) => {
  const MateriaPrima = sequelize.define('materia_prima', {
    materia_prima_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nominal: {
      type: DataType.STRING,
    },
    unidad_medida: {
      type: DataType.STRING,
    },
    forma: {
      type: DataType.STRING,
    },
    espesor: {
      type: DataType.INTEGER,
    },
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return MateriaPrima
}