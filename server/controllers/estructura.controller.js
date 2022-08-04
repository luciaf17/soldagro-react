const db = require('../models')
const Estructura = db.estructura

exports.create = async (request, response) => {
  // validar request
  if (!request.body.proceso1_id) {
    response.status(400).send({
      message: "Se debe agregar al menos un proceso válido."
    })
  } else if (!request.body.descripcion1) {
    response.status(400).send({
      message: "Se debe agregar al menos una descripción."
    })
  }

  // crear estructura
  const estructura = {
    proceso1_id: request.body.proceso1,
    tiempo1: request.body.tiempo1 || null,
    descripcion1: request.body.descripcion1,
    proceso2_id: request.body.proceso2 || null,
    tiempo2: request.body.tiempo2 || null,
    descripcion2: request.body.descripcion2 || null,
    proceso3_id: request.body.proceso3 || null,
    tiempo3: request.body.tiempo3 || null,
    descripcion3: request.body.descripcion3 || null,
    proceso4_id: request.body.proceso4 || null,
    tiempo4: request.body.tiempo4 || null,
    descripcion4: request.body.descripcion4 || null,
    proceso5_id: request.body.proceso5 || null,
    tiempo5: request.body.tiempo5 || null,
    descripcion5: request.body.descripcion5 || null,
  }

  try {
    const savedEstructura = await Estructura.create(estructura)
    response.status(201).json(savedEstructura)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear una estructura."
    })
  }

}

// traer todos las estructuras
exports.findAll = async (request, response) => {
  try {
    const estructuras = await Estructura.findAll()
    response.send(estructuras)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener las estructuras."
    })
  }
}

// traer una estructura por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const estructura = await Estructura.findByPk(id)
    response.send(estructura)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener La estructura con id: " + id
    })
  }
}

// modificar una estructura por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Estructura.update(request.body, {
      where: { estructura_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "La estructura ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `La estructura con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar la estructura con id: ' + id
    })
  }
}

//eliminar una estructura
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Estructura.destroy({
      where: { estructura_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "La estructura se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `La estructura con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar la estructura con id: " + id
    })
  }
}