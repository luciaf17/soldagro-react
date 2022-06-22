const db = require('../models')
const TipoContenedor = db.tipoContenedor

exports.create = async (request, response) => {
  // validar request
  if (!request.body.tipo) {
    response.status(400).send({
      message: "El tipo del contenedor no puede estar vacío!"
    })
    return
  }

  // crear tipoContenedor
  const tipoContenedor = {
    tipo: request.body.tipo,
  }

  try {
    const savedTipoContenedor = await TipoContenedor.create(tipoContenedor)
    response.status(201).json(savedTipoContenedor)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un tipo de contenedor."
    })
  }

}

// traer todos los tipos de contenedor
exports.findAll = async (request, response) => {
  try {
    const tiposContenedor = await TipoContenedor.findAll()
    response.send(tiposContenedor)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los tipos de contenedor."
    })
  }
}

// traer un tipo de contenedor por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const tipoContenedor = await TipoContenedor.findByPk(id)
    response.send(tipoContenedor)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el tipo de contenedor con id: " + id
    })
  }
}

// modificar un tipo de contenedor por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await TipoContenedor.update(request.body, {
      where: { tipo_contenedor_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El tipo de contenedor ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El tipo de contenedor con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el tipo de contenedor con id: ' + id
    })
  }
}

//eliminar un tipo de contenedor
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await TipoContenedor.destroy({
      where: { tipo_contenedor_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El tipo de contenedor se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El tipo de contenedor con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el tipo de contenedor con id: " + id
    })
  }
}