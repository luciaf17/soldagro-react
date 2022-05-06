module.exports = (sequelize, DataType) => {
  const UsuarioRol = sequelize.define('usuario_rol', {
    usuario_rol_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return UsuarioRol
}