const db = require('../models')
const PedidoPieza = db.pedido_pieza
const Pedido = db.pedido
const Pieza = db.pieza

exports.create = async (request, response) => {
  // validar request

  try {
    const pedidoExistente = await Pedido.findByPk(request.body.pedido_id)
    await pedidoExistente.addRol(await Pieza.findByPk(request.body.rol_id))
    response.status(201).send("Se ha agregado correctamente la pieza al pedido.")
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al agregar la pieza al pedido."
    })
  }

}

// traer todos los pedidos
exports.findAll = async (request, response) => {
  try {
    const pedidosroles = await PedidoPieza.findAll()
    response.send(pedidosroles)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los pedidos y sus roles."
    })
  }
}

// traer un pedido por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const pedidoPieza = await PedidoPieza.findByPk(id)
    response.send(pedidoPieza)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el pedido y su pieza con id: " + id
    })
  }
}

/* // modificar un pedido por id
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
 */