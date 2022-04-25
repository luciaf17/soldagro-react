const db = require('../models')
const Pieza = db.pieza

exports.create = (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear pieza
  const pieza = {
    codigo_cliente: request.body.codigo_cliente,
    nombre: request.body.nombre,
    peso: request.body.peso,
    largo_superficie: request.body.largo_superficie,
    plano: request.body.plano,
    cliente_id: request.body.cliente_id,
    materia_prima_id: request.body.materia_prima_id,
    forma: request.body.forma,
    despacho_id: request.body.despacho_id,
    orden_de_trabajo_id: request.body.orden_de_trabajo_id,
    grupo: request.body.grupo,
    nominal: request.body.nominal,
    revision: request.body.revision,
    subconjunto_id: request.body.subconjunto_id || null,
    conjunto_id: request.body.conjunto_id || null,
    deposito_id: request.body.deposito_id,
    precio: request.body.precio,
  }

  Pieza.create(pieza)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear una pieza."
      })
    })
}

// traer todos las piezas
exports.findAll = (request, response) => {
  Pieza.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener las piezas."
      })
    })
}

// traer una pieza por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Pieza.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener la pieza con id: " + id
      })
    })
}

// modificar una pieza por id
exports.update = (request, response) => {
  const id = request.params.id

  Pieza.update(request.body, {
    where: { pieza_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La pieza ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `La pieza con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar la pieza con id: ' + id
      })
    })
}

//eliminar una pieza
exports.delete = (request, response) => {
  const id = request.params.id

  Pieza.destroy({
    where: { pieza_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La pieza se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `La pieza con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar la pieza con id: " + id
      })
    })
}