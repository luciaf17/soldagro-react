const db = require('../models')
const OrdenDeTrabajo = db.ordenDeTrabajo

exports.create = (request, response) => {
  // validar request
  // Chequear que puede ser validador para esta request

  // crear orden de trabajo
  const ordenDeTrabajo = {
    despacho_id: request.body.despacho_id,
    plano: request.body.plano,
    revision: request.body.revision,
    orden_compra: request.body.orden_compra
  }

  OrdenDeTrabajo.create(ordenDeTrabajo)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear una orden de trabajo."
      })
    })
}

// traer todas las ordenes de trabajo
exports.findAll = (request, response) => {
  OrdenDeTrabajo.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener las ordenes de trabajo."
      })
    })
}

// traer una orden de trabajo por id
exports.findOne = (request, response) => {
  const id = request.params.id

  OrdenDeTrabajo.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener la orden de trabajo con id: " + id
      })
    })
}

// modificar una orden de trabajo por id
exports.update = (request, response) => {
  const id = request.params.id

  OrdenDeTrabajo.update(request.body, {
    where: { orden_de_trabajo_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La orden de trabajo ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `La orden de trabajo con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar la orden de trabajo con id: ' + id
      })
    })
}

//eliminar una orden de trabajo
exports.delete = (request, response) => {
  const id = request.params.id

  OrdenDeTrabajo.destroy({
    where: { orden_de_trabajo_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La orden de trabajo se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `La orden de trabajo con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar la orden de trabajo con id: " + id
      })
    })
}