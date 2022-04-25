const db = require('../models')
const Proveedor = db.proveedor

exports.create = (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear proveedor
  const proveedor = {
    nombre: request.body.nombre,
    direccion: request.body.direccion || null,
    localidad: request.body.localidad || null,
    contacto: request.body.contacto || null,
    cuit: request.body.cuit || null
  }

  Proveedor.create(proveedor)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un proveedor."
      })
    })
}

// traer todos los proveedores
exports.findAll = (request, response) => {
  Proveedor.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los proveedores."
      })
    })
}

// traer un proveedor por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Proveedor.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el proveedor con id: " + id
      })
    })
}

// modificar un proveedor por id
exports.update = (request, response) => {
  const id = request.params.id
  Proveedor.update(request.body, {
    where: { proveedor_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El proveedor ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El proveedor con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el proveedor con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  Proveedor.destroy({
    where: { proveedor_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El proveedor se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El proveedor con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el proveedor con id: " + id
      })
    })
}