const db = require('../models')
const Proceso = db.proceso

exports.create = async (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre del proceso no puede estar vacío!"
    })
    return
  }

  // crear proceso
  const proceso = {
    nombre: request.body.nombre
  }

  try {
    const savedProceso = await Proceso.create(proceso)
    response.status(201).json(savedProceso)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un proceso."
    })
  }

}

// traer todos los procesos
exports.findAll = async (request, response) => {
  try {
    const procesos = await Proceso.findAll()
    response.send(procesos)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los procesos."
    })
  }
}

// traer un proceso por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const proceso = await Proceso.findByPk(id)
    response.send(proceso)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el proceso con id: " + id
    })
  }
}

// modificar un proceso por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Proceso.update(request.body, {
      where: { proceso_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El proceso ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El proceso con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el proceso con id: ' + id
    })
  }
}

//eliminar un proceso
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Proceso.destroy({
      where: { proceso_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El proceso se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El proceso con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el proceso con id: " + id
    })
  }
}