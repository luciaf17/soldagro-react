const db = require('../models')
const Sector = db.sector

exports.create = (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear sector
  const sector = {
    nombre: request.body.nombre,
    contenedor_id: request.body.contenedor_id
  }

  Sector.create(sector)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un sector."
      })
    })
}

// traer todos los sectores
exports.findAll = (request, response) => {
  Sector.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los sectores."
      })
    })
}

// traer un sector por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Sector.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el sector con id: " + id
      })
    })
}

// modificar un sector por id
exports.update = (request, response) => {
  const id = request.params.id

  Sector.update(request.body, {
    where: { sector_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El sector ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El sector con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el sector con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  Sector.destroy({
    where: { sector_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El sector se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El sector con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el sector con id: " + id
      })
    })
}