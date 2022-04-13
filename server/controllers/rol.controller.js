const db = require('../models')
const Rol = db.rol

exports.create = (request, response) => {
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

  Rol.create(rol)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un rol."
      })
    })
}

// traer todos los roles
exports.findAll = (request, response) => {
  Rol.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los roles."
      })
    })
}

// traer un rol por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Rol.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el rol con id: " + id
      })
    })
}

// modificar un rol por id
exports.update = (request, response) => {
  const id = request.params.id
  console.log(request.body)
  Rol.update(request.body, {
    where: { rol_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El rol ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El rol con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el rol con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  Rol.destroy({
    where: { rol_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El rol se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El rol con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el rol con id: " + id
      })
    })
}