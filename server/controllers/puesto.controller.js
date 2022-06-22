const db = require('../models')
const Puesto = db.puesto

exports.create = async (request, response) => {
  // validar request
  if (!request.body.tipo_puesto) {
    response.status(400).send({
      message: "El id del puesto del puesto no debe estar vacío!"
    })
    return
  }

  // crear puesto
  const puesto = {
    nombre: request.body.nombre,
    tipo_puesto_id: request.body.tipo_puesto,
  }

  try {
    const savedPuesto = await Puesto.create(puesto)
    response.status(201).json(savedPuesto)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un puesto."
    })
  }

}

// traer todos los puestos
exports.findAll = async (request, response) => {
  try {
    const puestos = await Puesto.findAll()
    response.send(puestos)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los puestos."
    })
  }
}

// traer un puesto por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const puesto = await Puesto.findByPk(id)
    response.send(puesto)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el puesto con id: " + id
    })
  }
}

// modificar un puesto por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Puesto.update(request.body, {
      where: { puesto_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El puesto ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El puesto con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el puesto con id: ' + id
    })
  }
}

//eliminar un puesto
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Puesto.destroy({
      where: { puesto_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El puesto se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El puesto con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el puesto con id: " + id
    })
  }
}