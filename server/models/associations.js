/* const Usuario = require('./usuario.model')
const Puesto = require('./puesto.model')
const nombrePuesto = require('./nombrePuesto.model')
const Rol = require('./rol.model')

function associateModels() {

  
  Puesto.belongsTo(nombrePuesto)

  Usuario.belongsToMany(Rol, {
    through: "usuario_rol",
    as: "rol",
    foreignKey: "usuario_id"
  })
  Rol.belongsToMany(Usuario, {
    through: "usuario_rol",
    as: "usuario",
    foreignKey: "rol_id"
  })
}

module.exports = { associateModels }
 */