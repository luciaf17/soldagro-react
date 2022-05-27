const bcrypt = require('bcrypt')

module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define('usuario', {
    usuario_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
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

  Usuario.prototype.compareHash = async function (password, passwordHash) {
    return await bcrypt.compare(password, passwordHash)
  }

  return Usuario
}


/* const sql = require('./index.js')

const Usuario = function (usuario) {
  this.nombre = usuario.nombre
  this.puesto = usuario.puesto
}

Usuario.create = (nuevoUsuario, res) => {
  sql.query('INSERT INTO usuario SET ?', nuevoUsuario, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    console.log('Usuario creado: ', { id: res.insertId, ...nuevoUsuario })
    resutl(null, { id: res.insertId, ...nuevoUsuario })
  })
}

Usuario.findById = () => {
  sql.query(`SELECT * FROM usuario WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    if (res.lenght) {
      console.log('Usuario encontrado: ', res[0])
      result(null, res[0])
      return
    }
    resutl({ kind: 'not_found' }, null)
  })
} */