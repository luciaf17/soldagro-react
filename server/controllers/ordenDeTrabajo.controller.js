const db = require('../models')
const OrdenDeTrabajo = db.ordenDeTrabajo

exports.create = async (request, response) => {
  // validar request
  // Chequear que puede ser validador para esta request

  // crear orden de trabajo
  const ordenDeTrabajo = {
    despacho_id: request.body.despacho,
    plano: request.body.plano,
    revision: request.body.revision,
    orden_compra: request.body.orden_compra,
    cantidad: request.body.cantidad,
    orden_de_trabajo_id: request.body.orden_de_trabajo,
    deposito_id: request.body.deposito,
    cantidad_buenas: request.body.cantidad_buenas,
    cantidad_malas: request.body.cantidad_malas,
    fecha_inicio: request.body.fecha_inicio,
    fecha_fin: request.body.fecha_fin,
    responsable: request.body.usuario
  }

  try {
    const savedOrdenDeTrabajo = await OrdenDeTrabajo.create(ordenDeTrabajo)
    response.status(201).json(savedOrdenDeTrabajo)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear una orden de trabajo."
    })
  }

}

// traer todos las ordenes de trabajo
exports.findAll = async (request, response) => {
  try {
    const ordenesDeTrabajo = await OrdenDeTrabajo.findAll()
    response.send(ordenesDeTrabajo)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener las ordenes de trabajo."
    })
  }
}

// traer una orden de trabajo por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const ordenDeTrabajo = await OrdenDeTrabajo.findByPk(id)
    response.send(ordenDeTrabajo)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener La orden de trabajo con id: " + id
    })
  }
}

// modificar una orden de trabajo por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await OrdenDeTrabajo.update(request.body, {
      where: { orden_de_trabajo_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "La orden de trabajo ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `La orden de trabajo con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar la orden de trabajo con id: ' + id
    })
  }
}

//eliminar una orden de trabajo
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await OrdenDeTrabajo.destroy({
      where: { orden_de_trabajo_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "La orden de trabajo se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `La orden de trabajo con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar la orden de trabajo con id: " + id
    })
  }
}