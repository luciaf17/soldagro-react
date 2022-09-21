const db = require('../models')
const Usuario = db.usuario
const Rol = db.rol

exports.create = async (request, response) => {
  const { username, password, roles } = request.body

  // validar request
  if (!username) {
    response.status(400).send({
      message: "¡El usuario no puede estar vacío!"
    })
    return
  }
  if (!password) {
    response.status(400).send({
      message: "¡El password no puede estar vacío!"
    })
    return
  }
  if (!roles) {
    response.status(400).send({
      message: "¡Se debe asignar al menos un rol!"
    })
    return
  }

  const usuarioExistente = await Usuario.findOne({ where: { username } })
  if (usuarioExistente) {
    return response.status(400).send({
      error: "Ya existe un usuario con el mismo nombre de usuario. El usuario debe ser único"
    })
  }

  // crear usuario
  const usuario = {
    username,
    password
  }

  try {
    const usuarioCreado = await Usuario.create(usuario)
    for await (const rol of roles) {
      await usuarioCreado.addRoles(await Rol.findByPk(rol.value))
    }
    response.status(201).json(usuarioCreado)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un usuario."
    })
  }

}

// traer todos los usuarios
exports.findAll = async (request, response) => {
  try {
    const usuarios = await Usuario.findAll()
    response.json(usuarios)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los usuarios."
    })
  }
}

// traer un usuario por id, incluidos los roles
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const usuario = await Usuario.findByPk(id, {
      include: {
        model: Rol,
        as: 'rol',
        through: {
          attributes: []
        }
      }
    })
    response.send(usuario)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el usuario con id: " + id
    })
  }
}

// modificar un usuario por id
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

//eliminar un usuario
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Usuario.destroy({
      where: { usuario_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El usuario se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El usuario con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el usuario con id: " + id
    })
  }
}