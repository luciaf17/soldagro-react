module.exports = (sequelize, DataType) => {
  const Pieza = sequelize.define('pieza', {
    pieza_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataType.STRING,
      allowNull: false
    },
    peso: {
      type: DataType.INTEGER,
      allowNull: false
    },
    plano: {
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
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Pieza
}