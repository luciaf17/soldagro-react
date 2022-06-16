const db = require('../models')
const UsuarioRol = db.usuario_rol
const Usuario = db.usuario
const Rol = db.rol

exports.create = async (request, response) => {
  // validar request

  try {
    const usuarioExistente = await Usuario.findByPk(request.body.usuario_id)
    await usuarioExistente.addRol(await Rol.findByPk(request.body.rol_id))
    response.status(201).send("Se ha agregado correctamente el rol al usuario.")
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al agregar el rol al usuario."
    })
  }

}

// traer todos los usuarios
exports.findAll = async (request, response) => {
  try {
    const usuariosroles = await UsuarioRol.findAll()
    response.send(usuariosroles)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los usuarios y sus roles."
    })
  }
}

// traer un usuario por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const usuariorol = await UsuarioRol.findByPk(id)
    response.send(usuariorol)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el usuario y su rol con id: " + id
    })
  }
}

/* // modificar un usuario por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Usuario.update(request.body, {
      where: { usuario_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El usuario ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El usuario con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el usuario con id: ' + id
    })
  }
}
 */