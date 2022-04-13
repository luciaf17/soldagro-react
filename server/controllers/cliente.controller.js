const db = require('../models')
const Cliente = db.cliente

exports.create = (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear cliente
  const cliente = {
    nombre: request.body.nombre,
    direccion: request.body.direccion || null,
    contacto: request.body.contacto || null,
  }

  Cliente.create(cliente)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un cliente."
      })
    })
}

// traer todos los clientes
exports.findAll = (request, response) => {
  Cliente.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los clientes."
      })
    })
}

// traer un cliente por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Cliente.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el cliente con id: " + id
      })
    })
}

// modificar un cliente por id
exports.update = (request, response) => {
  const id = request.params.id

  Cliente.update(request.body, {
    where: { cliente_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El cliente ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El cliente con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el cliente con id: ' + id
      })
    })
}

//eliminar un cliente
exports.delete = (request, response) => {
  const id = request.params.id

  Cliente.destroy({
    where: { cliente_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El cliente se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El cliente con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el cliente con id: " + id
      })
    })
}