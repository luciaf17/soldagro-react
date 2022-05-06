const db = require('../models')
const TipoPuesto = db.tipoPuesto

exports.create = (request, response) => {
  // validar request
  if (!request.body.tipo) {
    response.status(400).send({
      message: "El tipo del puesto no puede estar vacío!"
    })
    return
  }

  // crear tipoPuesto
  const tipoPuesto = {
    tipo: request.body.tipo,
  }

  TipoPuesto.create(tipoPuesto)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un tipo de puesto."
      })
    })
}

// traer todos los tipoPuesto
exports.findAll = (request, response) => {
  TipoPuesto.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los tipos de puestos."
      })
    })
}

// traer un tipoPuesto por id
exports.findOne = (request, response) => {
  const id = request.params.id

  TipoPuesto.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el tipo de puesto con id: " + id
      })
    })
}

// modificar un tipoPuesto por id
exports.update = (request, response) => {
  const id = request.params.id
  console.log(request.body)

  TipoPuesto.update(request.body, {
    where: { tipo_puesto_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El tipo de puesto ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El tipo de puesto con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el tipo de puesto con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  TipoPuesto.destroy({
    where: { tipo_puesto_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El tipo de puesto se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El tipo de puesto con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el tipo de puesto con id: " + id
      })
    })
}