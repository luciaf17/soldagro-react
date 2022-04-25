const db = require('../models')
const Contenedor = db.contenedor

exports.create = (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  } else if (!request.body.puesto_id) {
    response.status(400).send({
      message: "El puesto no puede estar vacío!"
    })
    return
  }

  // crear contenedor
  const contenedor = {
    nombre: request.body.nombre,
    puesto_id: request.body.puesto_id
  }

  Contenedor.create(contenedor)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un contenedor."
      })
    })
}

// traer todos los contenedores
exports.findAll = (request, response) => {
  Contenedor.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los contenedores."
      })
    })
}

// traer un contenedor por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Contenedor.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el contenedor con id: " + id
      })
    })
}

// modificar un contenedor por id
exports.update = (request, response) => {
  const id = request.params.id

  Contenedor.update(request.body, {
    where: { contenedor_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El contenedor ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El contenedor con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el contenedor con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  Contenedor.destroy({
    where: { contenedor_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El contenedor se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El contenedor con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el contenedor con id: " + id
      })
    })
}