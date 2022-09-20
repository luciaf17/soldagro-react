module.exports = (sequelize, DataType) => {
  const PedidoPieza = sequelize.define('pedido_pieza', {
    pedido_pieza_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad: {
      type: DataType.INTEGER,
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return PedidoPieza
}