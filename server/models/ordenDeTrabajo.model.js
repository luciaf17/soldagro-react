module.exports = (sequelize, DataType) => {
  const OrdenDeTrabajo = sequelize.define('orden_de_trabajo', {
    orden_de_trabajo_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataType.STRING,
    },
    plano: {
      type: DataType.STRING,
    },
    revision: {
      type: DataType.STRING,
    },
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return OrdenDeTrabajo
}