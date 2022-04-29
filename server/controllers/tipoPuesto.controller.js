const db = require('../models')
const TipoPuesto = db.tipoPuesto

exports.create = async (request, response) => {
  // validar request
  if (!request.body.tipo) {
    response.status(400).send({
      message: "El tipo del puesto no puede estar vacío!"
    })
    return
  }

  // crear tipoPuesto
  const tipoPuesto = {
    tipo: request.body.tipo,
  }

  try {
    const savedTipoPuesto = await TipoPuesto.create(tipoPuesto)
    response.status(201).json(savedTipoPuesto)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un tipo de puesto."
    })
  }

}

// traer todos los tipos de puesto
exports.findAll = async (request, response) => {
  try {
    const tiposPuesto = await TipoPuesto.findAll()
    response.send(tiposPuesto)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los tipos de puesto."
    })
  }
}

// traer un tipo de puesto por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const tipoPuesto = await TipoPuesto.findByPk(id)
    response.send(tipoPuesto)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el tipo de puesto con id: " + id
    })
  }
}

// modificar un tipo de puesto por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await TipoPuesto.update(request.body, {
      where: { tipo_puesto_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El tipo de puesto ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El tipo de puesto con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el tipo de puesto con id: ' + id
    })
  }
}

//eliminar un tipo de puesto
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await TipoPuesto.destroy({
      where: { tipo_puesto_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El tipo de puesto se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El tipo de puesto con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el tipo de puesto con id: " + id
    })
  }
}