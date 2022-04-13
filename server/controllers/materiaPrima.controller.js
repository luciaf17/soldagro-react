const db = require('../models')
const MateriaPrima = db.materiaPrima

exports.create = (request, response) => {
  // validar request
  if (!request.body.material_id) {
    response.status(400).send({
      message: "El material no puede estar vacío!"
    })
    return
  }

  // crear materia prima
  const materiaPrima = {
    material_id: request.body.material_id,
    nominal: request.body.nominal || null,
    unidad_medida: request.body.unidad_medida || null,
    forma: request.body.forma || null,
    espesor: request.body.espesor || null
  }

  MateriaPrima.create(materiaPrima)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un materia prima."
      })
    })
}

// traer todas las materias primas
exports.findAll = (request, response) => {
  MateriaPrima.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener las materias primas."
      })
    })
}

// traer una materia prima por id
exports.findOne = (request, response) => {
  const id = request.params.id

  MateriaPrima.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener la materia prima con id: " + id
      })
    })
}

// modificar una materia prima por id
exports.update = (request, response) => {
  const id = request.params.id

  MateriaPrima.update(request.body, {
    where: { materia_prima_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La materia prima ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `La materia prima con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar la materia prima con id: ' + id
      })
    })
}

//eliminar una materia prima
exports.delete = (request, response) => {
  const id = request.params.id

  MateriaPrima.destroy({
    where: { materia_prima_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "La materia prima se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `La materia prima con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar la materia prima con id: " + id
      })
    })
}