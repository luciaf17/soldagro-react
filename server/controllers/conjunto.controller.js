const db = require('../models')
const Conjunto = db.conjunto

exports.create = (request, response) => {
  // validar request
  // Chequear validadores de esta request

  // crear conjunto
  const conjunto = {
    descripcion: request.body.descripcion,
    deposito_id: request.body.deposito_id,
  }

  Conjunto.create(conjunto)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un conjunto."
      })
    })
}

// traer todos los conjuntos
exports.findAll = (request, response) => {
  Conjunto.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los conjuntos."
      })
    })
}

// traer un conjunto por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Conjunto.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el conjunto con id: " + id
      })
    })
}

// modificar un conjunto por id
exports.update = (request, response) => {
  const id = request.params.id

  Conjunto.update(request.body, {
    where: { conjunto_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El conjunto ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El conjunto con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el conjunto con id: ' + id
      })
    })
}

//eliminar un conjunto
exports.delete = (request, response) => {
  const id = request.params.id

  Conjunto.destroy({
    where: { conjunto_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El conjunto se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El conjunto con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el conjunto con id: " + id
      })
    })
}