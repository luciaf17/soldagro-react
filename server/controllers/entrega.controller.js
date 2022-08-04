const db = require('../models')
const Entrega = db.entrega

exports.create = async (request, response) => {
  // validar request
  // chequear validadores

  // crear entrega

  //chequear orden_de_compra_id (pedido_id u otra cosa?)
  const entrega = {
    orden_de_trabajo_id: request.body.orden_de_trabajo,
    orden_de_compra_id: request.body.orden_de_compra,
    despacho_id: request.body.despacho,
    fecha_entrega: request.body.fecha_entrega,
    codigo_pieza_cliente: request.body.codigo_pieza_cliente,
    pieza_id: request.body.pieza,
    cant_pedidas: request.body.cant_pedidas,
    cant_entregadas: request.body.cant_entregadas,
    saldo: request.body.saldo,
    fecha: request.body.fecha
  }

  try {
    const savedEntrega = await Entrega.create(entrega)
    response.status(201).json(savedEntrega)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear una entrega."
    })
  }

}

// traer todos las entregas
exports.findAll = async (request, response) => {
  try {
    const entregas = await Entrega.findAll()
    response.send(entregas)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener las entregas."
    })
  }
}

// traer un entrega por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const entrega = await Entrega.findByPk(id)
    response.send(entrega)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener la entrega con id: " + id
    })
  }
}

// modificar un entrega por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Entrega.update(request.body, {
      where: { entrega_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "La entrega ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `La entrega con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar la entrega con id: ' + id
    })
  }
}

//eliminar un entrega
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Entrega.destroy({
      where: { entrega_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "La entrega se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `La entrega con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar la entrega con id: " + id
    })
  }
}