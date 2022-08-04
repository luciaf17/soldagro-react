const db = require('../models')
const Subconjunto = db.subconjunto

exports.create = async (request, response) => {
  // validar request
  // Chequear validadores de esta request

  // crear subconjunto
  const subconjunto = {
    descripcion: request.body.descripcion,
    conjunto_id: request.body.conjunto,
    deposito_id: request.body.deposito
  }

  try {
    const savedSubconjunto = await Subconjunto.create(subconjunto)
    response.status(201).json(savedSubconjunto)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un subconjunto."
    })
  }

}

// traer todos los subconjuntos
exports.findAll = async (request, response) => {
  try {
    const subconjuntos = await Subconjunto.findAll()
    response.send(subconjuntos)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los subconjuntos."
    })
  }
}

// traer un subconjunto por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const subconjunto = await Subconjunto.findByPk(id)
    response.send(subconjunto)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el subconjunto con id: " + id
    })
  }
}

// modificar un subconjunto por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Subconjunto.update(request.body, {
      where: { subconjunto_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El subconjunto ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El subconjunto con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el subconjunto con id: ' + id
    })
  }
}

//eliminar un subconjunto
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Subconjunto.destroy({
      where: { subconjunto_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El subconjunto se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El subconjunto con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el subconjunto con id: " + id
    })
  }
}