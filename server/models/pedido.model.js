module.exports = (sequelize, DataType) => {
  const Pedido = sequelize.define('pedido', {
    pedido_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha_entrega: {
      type: DataType.DATE,
    },
    orden_compra: {
      type: DataType.INTEGER,
      unique: true,
    },
    observacion: {
      type: DataType.STRING,
    },
    estado: {
      type: DataType.STRING,
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Pedido
}