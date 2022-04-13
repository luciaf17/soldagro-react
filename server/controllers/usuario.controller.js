const db = require('../models')
const Usuario = db.usuario

exports.create = (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear usuario
  const usuario = {
    nombre: request.body.nombre,
    puesto_id: request.body.puesto_id || null
  }

  Usuario.create(usuario)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un usuario."
      })
    })
}

// traer todos los usuarios
exports.findAll = (request, response) => {
  Usuario.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los usuarios."
      })
    })
}

// traer un usuario por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Usuario.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el usuario con id: " + id
      })
    })
}

// modificar un usuario por id
exports.update = (request, response) => {
  const id = request.params.id

  Usuario.update(request.body, {
    where: { usuario_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El usuario ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El usuario con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el usuario con id: ' + id
      })
    })
}

//eliminar un usuario
exports.delete = (request, response) => {
  const id = request.params.id

  Usuario.destroy({
    where: { usuario_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El usuario se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El usuario con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el usuario con id: " + id
      })
    })
}