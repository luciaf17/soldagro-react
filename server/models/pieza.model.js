module.exports = (sequelize, DataType) => {
  const Pieza = sequelize.define('pieza', {
    pieza_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_cliente: {
      type: DataType.STRING,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataType.STRING,
      allowNull: false
    },
    peso: {
      type: DataType.DOUBLE,
      allowNull: false
    },
    largo_superficie: {
      type: DataType.DOUBLE,
      allowNull: false
    },
    plano: {
      type: DataType.STRING,
      allowNull: false
    },
    forma: {
      type: DataType.STRING,
      allowNull: false
    },
    grupo: {
      type: DataType.STRING,
      allowNull: false
    },
    nominal: {
      type: DataType.STRING,
      allowNull: false
    },
    revision: {
      type: DataType.STRING,
      allowNull: false
    },
    precio: {
      type: DataType.DOUBLE,
      allowNull: false
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Pieza
}