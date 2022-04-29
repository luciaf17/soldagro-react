const db = require('../models')
const Pieza = db.pieza

exports.create = async (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear pieza
  const pieza = {
    codigo_cliente: request.body.codigo_cliente,
    nombre: request.body.nombre,
    peso: request.body.peso,
    largo_superficie: request.body.largo_superficie,
    plano: request.body.plano,
    pieza_id: request.body.pieza_id,
    materia_prima_id: request.body.materia_prima_id,
    forma: request.body.forma,
    despacho_id: request.body.despacho_id,
    orden_de_trabajo_id: request.body.orden_de_trabajo_id,
    grupo: request.body.grupo,
    nominal: request.body.nominal,
    revision: request.body.revision,
    subconjunto_id: request.body.subconjunto_id || null,
    conjunto_id: request.body.conjunto_id || null,
    deposito_id: request.body.deposito_id,
    precio: request.body.precio,
  }

  try {
    const savedPieza = await Pieza.create(pieza)
    response.status(201).json(savedPieza)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear una pieza."
    })
  }

}

// traer todas las piezas
exports.findAll = async (request, response) => {
  try {
    const piezas = await Pieza.findAll()
    response.send(piezas)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener las piezas."
    })
  }
}

// traer una pieza por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const pieza = await Pieza.findByPk(id)
    response.send(pieza)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener la pieza con id: " + id
    })
  }
}

// modificar una pieza por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Pieza.update(request.body, {
      where: { pieza_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "La pieza ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `La pieza con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar la pieza con id: ' + id
    })
  }
}

//eliminar una pieza
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Pieza.destroy({
      where: { pieza_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "La pieza se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `La pieza con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar la pieza con id: " + id
    })
  }
}