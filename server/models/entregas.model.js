module.exports = (sequelize, DataType) => {
  const Entrega = sequelize.define('entrega', {
    entrega_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha_entrega: {
      type: DataType.DATE,
      allowNull: false
    },
    codigo_pieza_cliente: {
      type: DataType.STRING,
    },
    cant_pedidas: {
      type: DataType.INTEGER,
    },
    cant_entregadas: {
      type: DataType.INTEGER,
    },
    saldo: {
      type: DataType.INTEGER
    },
    fecha: {
      type: DataType.DATE
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Entrega
}
