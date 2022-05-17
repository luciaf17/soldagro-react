const db = require('../models')
const Usuario = db.usuario
const Rol = db.rol

exports.create = async (request, response) => {
  // validar request
  console.log(request.body)
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear usuario
  const usuario = {
    nombre: request.body.nombre,
    password: request.body.password
  }

  try {
    const savedUsuario = await Usuario.create(usuario)
    await savedUsuario.addRol(await Rol.findByPk(request.body.rol))
    response.status(201).json(savedUsuario)
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

// traer un usuario por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const usuario = await Usuario.findByPk(id)
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