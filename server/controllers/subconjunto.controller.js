const db = require('../models')
const Subconjunto = db.subconjunto

exports.create = (request, response) => {
  // validar request
  // Chequear validadores de esta request

  // crear subconjunto
  const subconjunto = {
    descripcion: request.body.descripcion,
    conjunto_id: request.body.conjunto_id,
    deposito_id: request.body.deposito_id
  }

  Subconjunto.create(subconjunto)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un subconjunto."
      })
    })
}

// traer todos los subconjuntos
exports.findAll = (request, response) => {
  Subconjunto.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los subconjuntos."
      })
    })
}

// traer un subconjunto por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Subconjunto.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el subconjunto con id: " + id
      })
    })
}

// modificar un subconjunto por id
exports.update = (request, response) => {
  const id = request.params.id

  Subconjunto.update(request.body, {
    where: { subconjunto_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El subconjunto ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El subconjunto con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el subconjunto con id: ' + id
      })
    })
}

//eliminar un subconjunto
exports.delete = (request, response) => {
  const id = request.params.id

  Subconjunto.destroy({
    where: { subconjunto_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El subconjunto se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El subconjunto con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el subconjunto con id: " + id
      })
    })
}