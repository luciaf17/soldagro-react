const db = require('../models')
const Proceso = db.proceso

exports.create = (request, response) => {
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

  Proceso.create(proceso)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un proceso."
      })
    })
}

// traer todos los procesos
exports.findAll = (request, response) => {
  Proceso.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los procesos."
      })
    })
}

// traer un proceso por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Proceso.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el proceso con id: " + id
      })
    })
}

// modificar un proceso por id
exports.update = (request, response) => {
  const id = request.params.id

  Proceso.update(request.body, {
    where: { proceso_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El proceso ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El proceso con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el proceso con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  Proceso.destroy({
    where: { proceso_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El proceso se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El proceso con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el proceso con id: " + id
      })
    })
}