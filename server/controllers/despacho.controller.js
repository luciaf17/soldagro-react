const db = require('../models')
const Despacho = db.despacho

exports.create = async (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear despacho
  const despacho = {
    nombre: request.body.nombre
  }

  try {
    const savedDespacho = await Despacho.create(despacho)
    response.status(201).json(savedDespacho)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un despacho."
    })
  }

}

// traer todos los despachos
exports.findAll = async (request, response) => {
  try {
    const despachos = await Despacho.findAll()
    response.send(despachos)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los despachos."
    })
  }
}

// traer un despacho por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const despacho = await Despacho.findByPk(id)
    response.send(despacho)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el despacho con id: " + id
    })
  }
}

// modificar un despacho por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Despacho.update(request.body, {
      where: { despacho_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El despacho ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El despacho con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el despacho con id: ' + id
    })
  }
}

//eliminar un despacho
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Despacho.destroy({
      where: { despacho_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El despacho se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El despacho con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el despacho con id: " + id
    })
  }
}