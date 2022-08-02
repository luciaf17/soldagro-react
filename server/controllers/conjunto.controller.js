const db = require('../models')
const Conjunto = db.conjunto

exports.create = async (request, response) => {
  // validar request
  // Chequear validadores de esta request

  // crear conjunto
  const conjunto = {
    descripcion: request.body.descripcion,
    deposito_id: request.body.deposito,
  }
  try {
    const savedConjunto = await Conjunto.create(conjunto)
    response.status(201).json(savedConjunto)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un conjunto."
    })
  }
}

// traer todos los conjuntos
exports.findAll = async (request, response) => {
  try {
    const conjuntos = await Conjunto.findAll()
    response.send(conjuntos)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los conjuntos."
    })
  }
}

// traer un conjunto por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const conjunto = await Conjunto.findByPk(id)
    response.send(conjunto)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el conjunto con id: " + id
    })
  }
}

// modificar un conjunto por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Conjunto.update(request.body, {
      where: { conjunto_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El conjunto ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El conjunto con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el conjunto con id: ' + id
    })
  }
}

//eliminar un conjunto
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Conjunto.destroy({
      where: { conjunto_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El conjunto se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El conjunto con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el conjunto con id: " + id
    })
  }
}