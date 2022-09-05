const db = require('../models')
const Pedido = db.pedido

exports.create = async (request, response) => {
  // validar request
  // chequear que dato debe ser obligatorio para el pedido y validar con eso

  // crear pedido
  const pedido = {
    fecha_entrega: request.body.fecha_entrega,
    orden_compra: request.body.orden_compra,
    pieza_id: request.body.pieza,
    cantidad: request.body.cantidad,
    descripcion: request.body.descripcion,
    pedido_id: request.body.pedido,
    plano: request.body.plano,
    observacion: request.body.observacion,
    revision: request.body.revision
  }

  try {
    const savedPedido = await Pedido.create(pedido)
    response.status(201).json(savedPedido)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un pedido."
    })
  }

}

// traer todos los pedidos
exports.findAll = async (request, response) => {
  try {
    const pedidos = await Pedido.findAll({ include: { all: true }, attributes: { exclude: ['pieza_id', 'pedido_id'] } })
    response.send(pedidos)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los pedidos."
    })
  }
}

// traer un pedido por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const pedido = await Pedido.findByPk(id)
    response.send(pedido)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el pedido con id: " + id
    })
  }
}

// modificar un pedido por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Pedido.update(request.body, {
      where: { pedido_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El pedido ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El pedido con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el pedido con id: ' + id
    })
  }
}

//eliminar un pedido
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Pedido.destroy({
      where: { pedido_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El pedido se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El pedido con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el pedido con id: " + id
    })
  }
}