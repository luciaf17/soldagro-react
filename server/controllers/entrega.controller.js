const db = require('../models')
const Entrega = db.entrega

exports.create = (request, response) => {
  // validar request
  // chequear validadores

  // crear entrega

  //chequear orden_de_compra_id (pedido_id u otra cosa?)
  const entrega = {
    orden_de_trabajo_id: request.body.orden_de_trabajo_id,
    orden_de_compra_id: request.body.orden_de_compra_id,
    despacho_id: request.body.despacho_id,
    fecha_entrega: request.body.fecha_entrega,
    codigo_pieza_cliente: request.body.codigo_pieza_cliente,
    pieza_id: request.body.pieza_id,
    cant_pedidas: request.body.cant_pedidas,
    cant_entregadas: request.body.cant_entregadas,
    saldo: request.body.saldo,
    fecha: request.body.fecha
  }

  Entrega.create(entrega)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear una entrega."
      })
    })
}

// traer todos las entregas
exports.findAll = (request, response) => {
  Entrega.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener las entregas."
      })
    })
}

// traer una entrega por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Entrega.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener la entrega con id: " + id
      })
    })
}

// modificar una entrega por id
exports.update = (request, response) => {
  const id = request.params.id

  Entrega.update(request.body, {
    where: { entrega_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La entrega ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `La entrega con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar la entrega con id: ' + id
      })
    })
}

//eliminar una entrega
exports.delete = (request, response) => {
  const id = request.params.id

  Entrega.destroy({
    where: { entrega_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La entrega se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `La entrega con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar la entrega con id: " + id
      })
    })
}