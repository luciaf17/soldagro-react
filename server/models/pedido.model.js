module.exports = (sequelize, DataType) => {
  const Pedido = sequelize.define('pedido', {
    pedido_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataType.DATE,
    },
    fecha_entrega: {
      type: DataType.DATE,
    },
    orden_compra: {
      type: DataType.INTEGER,
      unique: true,
    },
    cantidad: {
      type: DataType.INTEGER,
    },
    plano: {
      type: DataType.STRING,
    },
    revision: {
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