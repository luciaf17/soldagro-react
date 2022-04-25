const db = require('../models')
const Estructura = db.estructura

exports.create = (request, response) => {
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
    proceso1_id: request.body.proceso1_id,
    tiempo1: request.body.tiempo1 || null,
    descripcion1: request.body.descripcion1,
    proceso2_id: request.body.proceso2_id || null,
    tiempo2: request.body.tiempo2 || null,
    descripcion2: request.body.descripcion2 || null,
    proceso3_id: request.body.proceso3_id || null,
    tiempo3: request.body.tiempo3 || null,
    descripcion3: request.body.descripcion3 || null,
    proceso4_id: request.body.proceso4_id || null,
    tiempo4: request.body.tiempo4 || null,
    descripcion4: request.body.descripcion4 || null,
    proceso5_id: request.body.proceso5_id || null,
    tiempo5: request.body.tiempo5 || null,
    descripcion5: request.body.descripcion5 || null,
  }

  Estructura.create(estructura)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear una estructura."
      })
    })
}

// traer todos las estructuras
exports.findAll = (request, response) => {
  Estructura.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener las estructuras."
      })
    })
}

// traer una estructura por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Estructura.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener la estructura con id: " + id
      })
    })
}

// modificar una estructura por id
exports.update = (request, response) => {
  const id = request.params.id

  Estructura.update(request.body, {
    where: { estructura_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "la estructura ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `la estructura con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar la estructura con id: ' + id
      })
    })
}

//eliminar un estructura
exports.delete = (request, response) => {
  const id = request.params.id

  Estructura.destroy({
    where: { estructura_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La estructura se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `La estructura con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar la estructura con id: " + id
      })
    })
}