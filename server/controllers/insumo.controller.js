const db = require('../models')
const Insumo = db.insumo

exports.create = (request, response) => {
  // validar request
  if (!request.body.descripcion) {
    response.status(400).send({
      message: "La descripción no puede estar vacía!"
    })
    return
  }

  // crear insumo
  const insumo = {
    descripcion: request.body.descripcion,
    marca: request.body.marca || null,
    tamanio: request.body.tamanio || null,
    unidad_medida: request.body.unidad_medida || null,
    precio: request.body.precio || null,
    proveedor_id: request.body.proveedor_id || null,
    deposito_id: request.body.deposito_id || null,
    stock: request.body.stock || null,
  }

  Insumo.create(insumo)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un insumo."
      })
    })
}

// traer todos los insumos
exports.findAll = (request, response) => {
  Insumo.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los insumos."
      })
    })
}

// traer un insumo por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Insumo.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el insumo con id: " + id
      })
    })
}

// modificar un insumo por id
exports.update = (request, response) => {
  const id = request.params.id
  Insumo.update(request.body, {
    where: { insumo_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El insumo ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El insumo con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el insumo con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  Insumo.destroy({
    where: { insumo_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El insumo se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El insumo con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el insumo con id: " + id
      })
    })
}