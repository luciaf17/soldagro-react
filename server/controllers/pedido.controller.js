const db = require('../models')
const Pedido = db.pedido

exports.create = (request, response) => {
  // validar request
  // chequear que dato debe ser obligatorio para el pedido y validar con eso

  // crear pedido
  const pedido = {
    fecha: request.body.fecha,
    fecha_entrega: request.body.fecha_entrega,
    orden_compra: request.body.orden_compra,
    pieza_id: request.body.pieza_id,
    cantidad: request.body.cantidad,
    descripcion: request.body.descripcion,
    cliente_id: request.body.cliente_id,
    plano: request.body.plano,
    revision: request.body.revision
  }

  Pedido.create(pedido)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un pedido."
      })
    })
}

// traer todos los pedidos
exports.findAll = (request, response) => {
  Pedido.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los pedidos."
      })
    })
}

// traer un pedido por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Pedido.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el pedido con id: " + id
      })
    })
}

// modificar un pedido por id
exports.update = (request, response) => {
  const id = request.params.id

  Pedido.update(request.body, {
    where: { pedido_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El pedido ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El pedido con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el pedido con id: ' + id
      })
    })
}

//eliminar un pedido
exports.delete = (request, response) => {
  const id = request.params.id

  Pedido.destroy({
    where: { pedido_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El pedido se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El pedido con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el pedido con id: " + id
      })
    })
}