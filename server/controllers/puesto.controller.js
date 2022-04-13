const db = require('../models')
const Puesto = db.puesto

exports.create = (request, response) => {
  // validar request
  if (!request.body.nombre_puesto_id) {
    response.status(400).send({
      message: "El id del nombre del puesto no debe estar vacío!"
    })
    return
  }

  // crear puesto
  const puesto = {
    nombre_puesto_id: request.body.nombre_puesto_id,
  }

  Puesto.create(puesto)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un puesto."
      })
    })
}

// traer todos los puesto
exports.findAll = (request, response) => {
  Puesto.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los puestos."
      })
    })
}

// traer un puesto por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Puesto.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el puesto con id: " + id
      })
    })
}

// modificar un puesto por id
exports.update = (request, response) => {
  const id = request.params.id
  Puesto.update(request.body, {
    where: { puesto_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El puesto ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El puesto con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el puesto con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  Puesto.destroy({
    where: { puesto_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El puesto se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El puesto con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el puesto con id: " + id
      })
    })
}