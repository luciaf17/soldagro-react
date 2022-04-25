module.exports = (sequelize, DataType) => {
  const Estructura = sequelize.define('estructura', {
    estructura_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    proceso1_id: {
      type: DataType.INTEGER
    },
    tiempo1: {
      type: 'TIMESTAMP',
      defaultValue: DataType.literal('CURRENT_TIMESTAMP')
    },
    descripcion1: {
      type: DataType.STRING
    },
    proceso2_id: {
      type: DataType.INTEGER
    },
    tiempo2: {
      type: 'TIMESTAMP',
      defaultValue: DataType.literal('CURRENT_TIMESTAMP')
    },
    descripcion2: {
      type: DataType.STRING
    },
    proceso3_id: {
      type: DataType.INTEGER
    },
    tiempo3: {
      type: 'TIMESTAMP',
      defaultValue: DataType.literal('CURRENT_TIMESTAMP')
    },
    descripcion3: {
      type: DataType.STRING
    },
    proceso4_id: {
      type: DataType.INTEGER
    },
    tiempo4: {
      type: 'TIMESTAMP',
      defaultValue: DataType.literal('CURRENT_TIMESTAMP')
    },
    descripcion4: {
      type: DataType.STRING
    },
    proceso5_id: {
      type: DataType.INTEGER
    },
    tiempo5: {
      type: 'TIMESTAMP',
      defaultValue: DataType.literal('CURRENT_TIMESTAMP')
    },
    descripcion5: {
      type: DataType.STRING
    },
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return Estructura
}
