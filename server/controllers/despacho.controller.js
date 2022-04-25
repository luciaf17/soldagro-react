const db = require('../models')
const Despacho = db.despacho

exports.create = (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear despacho
  const despacho = {
    nombre: request.body.nombre
  }

  Despacho.create(despacho)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un despacho."
      })
    })
}

// traer todos los despachos
exports.findAll = (request, response) => {
  Despacho.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los despachos."
      })
    })
}

// traer un despacho por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Despacho.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el despacho con id: " + id
      })
    })
}

// modificar un despacho por id
exports.update = (request, response) => {
  const id = request.params.id

  Despacho.update(request.body, {
    where: { despacho_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El despacho ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El despacho con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el despacho con id: ' + id
      })
    })
}

//eliminar un despacho
exports.delete = (request, response) => {
  const id = request.params.id

  Despacho.destroy({
    where: { despacho_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El despacho se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El despacho con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el despacho con id: " + id
      })
    })
}