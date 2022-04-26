module.exports = (sequelize, DataType) => {
  const OrdenDeTrabajo = sequelize.define('orden_de_trabajo', {
    orden_de_trabajo_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    plano: {
      type: DataType.STRING,
    },
    revision: {
      type: DataType.STRING,
    },
    cantidad: {
      type: DataType.INTEGER,
    },
    cantidad_buenas: {
      type: DataType.INTEGER,
    },
    cantidad_malas: {
      type: DataType.INTEGER,
    },
    fecha_inicio: {
      type: DataType.DATE,
    },
    fecha_fin: {
      type: DataType.DATE,
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return OrdenDeTrabajo
}