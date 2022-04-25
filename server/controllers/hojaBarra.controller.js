const db = require('../models')
const HojaBarra = db.hojaBarra

exports.create = (request, response) => {
  // validar request
  /*   if (!request.body.descripcion) {
      response.status(400).send({
        message: "La descripcion no puede estar vacía!"
      })
      return
    } */

  // crear hoja/barra
  const hojaBarra = {
    largo: request.body.largo || null,
    ancho: request.body.ancho || null,
    proveedor_id: request.body.proveedor_id || null,
    materia_prima_id: request.body.materia_prima_id || null,
    deposito_id: request.body.deposito_id || null,
    stock: request.body.stock || null,
  }

  HojaBarra.create(hojaBarra)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear una hoja/barra."
      })
    })
}

// traer todos los hojas/barras
exports.findAll = (request, response) => {
  HojaBarra.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener las hojas/barras."
      })
    })
}

// traer una hoja/barra por id
exports.findOne = (request, response) => {
  const id = request.params.id

  HojaBarra.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener la hoja/barra con id: " + id
      })
    })
}

// modificar un hoja/barra por id
exports.update = (request, response) => {
  const id = request.params.id

  HojaBarra.update(request.body, {
    where: { hoja_barra_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La hoja/barra ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `La hoja/barra con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar la hoja/barra con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  HojaBarra.destroy({
    where: { hoja_barra_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La hoja/barra se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `La hoja/barra con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar la hoja/barra con id: " + id
      })
    })
}