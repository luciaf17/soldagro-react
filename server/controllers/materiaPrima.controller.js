const db = require('../models')
const MateriaPrima = db.materiaPrima

exports.create = async (request, response) => {
  // validar request
  if (!request.body.material) {
    response.status(400).send({
      message: "El material no puede estar vacío!"
    })
    return
  }

  // crear materia prima
  const materiaPrima = {
    material_id: request.body.material,
    nominal: request.body.nominal || null,
    unidad_medida: request.body.unidad_medida || null,
    forma: request.body.forma || null,
    espesor: request.body.espesor || null
  }

  try {
    const savedMateriaPrima = await MateriaPrima.create(materiaPrima)
    response.status(201).json(savedMateriaPrima)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear una materia prima."
    })
  }

}

// traer todos las materias primas
exports.findAll = async (request, response) => {
  try {
    const materiasPrimas = await MateriaPrima.findAll({ include: { all: true }, attributes: { exclude: ['material_id'] } })
    response.send(materiasPrimas)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener las materias primas."
    })
  }
}

// traer una materia prima por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const materiaPrima = await MateriaPrima.findByPk(id)
    response.send(materiaPrima)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener la materia prima con id: " + id
    })
  }
}

// modificar una materia prima por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await MateriaPrima.update(request.body, {
      where: { materia_prima_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "La materia prima ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `La materia prima con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar la materia prima con id: ' + id
    })
  }
}

//eliminar una materia prima
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await MateriaPrima.destroy({
      where: { materia_prima_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "La materia prima se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `La materia prima con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar la materia prima con id: " + id
    })
  }
}