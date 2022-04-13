const db = require('../models')
const Deposito = db.deposito

exports.create = (request, response) => {
  // validar request
  if (!request.body.puesto_id) {
    response.status(400).send({
      message: "El id del puesto no debe estar vacío!"
    })
    return
  }

  // crear deposito
  const deposito = {
    puesto_id: request.body.puesto_id,
  }

  Deposito.create(deposito)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un deposito."
      })
    })
}

// traer todos los depositos
exports.findAll = (request, response) => {
  Deposito.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los depositos."
      })
    })
}

// traer un deposito por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Deposito.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el deposito con id: " + id
      })
    })
}

// modificar un deposito por id
exports.update = (request, response) => {
  const id = request.params.id
  Deposito.update(request.body, {
    where: { deposito_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El deposito ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El deposito con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el deposito con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  Deposito.destroy({
    where: { deposito_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El deposito se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El deposito con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el deposito con id: " + id
      })
    })
}