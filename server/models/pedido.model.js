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
      type: DataType.STRING,
    },
    cantidad: {
      type: DataType.INTEGER,
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

  return Pedido
}