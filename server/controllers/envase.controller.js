const db = require('../models')
const Envase = db.envase

exports.create = (request, response) => {
  // validar request
  if (!request.body.producto_id) {
    response.status(400).send({
      message: "El id del producto no puede estar vacío!"
    })
    return
  }

  // crear envase
  const envase = {
    producto_id: request.body.producto_id,
    producto_tipo: request.body.producto_tipo || null,
    capacidad: request.body.capacidad || null,
    unidad_medida: request.body.unidad_medida || null,
  }

  Envase.create(envase)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un envase."
      })
    })
}

// traer todos los envases
exports.findAll = (request, response) => {
  Envase.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los envases."
      })
    })
}

// traer un envase por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Envase.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el envase con id: " + id
      })
    })
}

// modificar un envase por id
exports.update = (request, response) => {
  const id = request.params.id

  Envase.update(request.body, {
    where: { envase_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El envase ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El envase con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el envase con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  Envase.destroy({
    where: { envase_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El envase se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El envase con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el envase con id: " + id
      })
    })
}