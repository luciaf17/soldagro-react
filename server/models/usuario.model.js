const bcrypt = require('bcrypt')

module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define('usuario', {
    usuario_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataType.STRING,
      allowNull: false
    },
    password: {
      type: DataType.STRING,
      allowNull: false
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName',
      hooks: {
        beforeCreate: async (usuario) => {
          if (usuario.password) {
            const salt = await bcrypt.genSalt()
            usuario.password = await bcrypt.hash(usuario.password, salt)
          }
        },
        afterCreate: (usuario) => {
          delete usuario.dataValues.password
        },
        afterUpdate: (usuario) => {
          delete usuario.dataValues.password
        },
      }
    }
  )

  // INSTANCE METHOD HECHO CON PROTOTYPE DE JS
  Usuario.prototype.compareHash = async function (password, passwordHash) {
    return await bcrypt.compare(password, passwordHash)
  }

  return Usuario
}