const db = require('../models')
const Rol = db.rol

exports.create = async (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear rol
  const rol = {
    nombre: request.body.nombre,
  }

  try {
    const savedRol = await Rol.create(rol)
    response.status(201).json(savedRol)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un rol."
    })
  }

}

// traer todos los roles
exports.findAll = async (request, response) => {
  try {
    const roles = await Rol.findAll()
    response.send(roles)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los roles."
    })
  }
}

// traer un rol por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const rol = await Rol.findByPk(id)
    response.send(rol)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el rol con id: " + id
    })
  }
}

// modificar un rol por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Rol.update(request.body, {
      where: { rol_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El rol ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El rol con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el rol con id: ' + id
    })
  }
}

//eliminar un rol
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Rol.destroy({
      where: { rol_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El rol se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El rol con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el rol con id: " + id
    })
  }
}