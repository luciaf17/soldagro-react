const db = require('../models')
const NombrePuesto = db.nombrePuesto

exports.create = (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre del puesto no puede estar vacío!"
    })
    return
  }

  // crear nombrePuesto
  const nombrePuesto = {
    nombre: request.body.nombre,
  }

  NombrePuesto.create(nombrePuesto)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un nombre de puesto."
      })
    })
}

// traer todos los nombrePuesto
exports.findAll = (request, response) => {
  NombrePuesto.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los nombres de puestos."
      })
    })
}

// traer un nombrePuesto por id
exports.findOne = (request, response) => {
  const id = request.params.id

  NombrePuesto.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el nombre de puesto con id: " + id
      })
    })
}

// modificar un nombrePuesto por id
exports.update = (request, response) => {
  const id = request.params.id
  console.log(request.body)

  NombrePuesto.update(request.body, {
    where: { nombre_puesto_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El nombre de puesto ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El nombre de puesto con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el nombre de puesto con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  NombrePuesto.destroy({
    where: { nombre_puesto_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El nombre de puesto se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El nombre de puesto con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el nombrePuesto con id: " + id
      })
    })
}