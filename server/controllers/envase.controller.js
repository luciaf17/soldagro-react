const db = require('../models')
const Envase = db.envase

exports.create = async (request, response) => {
  // validar request
  if (!request.body.producto_id) {
    response.status(400).send({
      message: "El id del producto no puede estar vacío!"
    })
    return
  }

  // crear envase
  const envase = {
    producto_id: request.body.producto_id,
    producto_tipo: request.body.producto_tipo || null,
    capacidad: request.body.capacidad || null,
    unidad_medida: request.body.unidad_medida || null,
    deposito_id: request.body.deposito_id || null,
  }

  try {
    const savedEnvase = await Envase.create(envase)
    response.status(201).json(savedEnvase)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un envase."
    })
  }

}

// traer todos los envases
exports.findAll = async (request, response) => {
  try {
    const envases = await Envase.findAll()
    response.send(envases)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los envases."
    })
  }
}

// traer un envase por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const envase = await Envase.findByPk(id)
    response.send(envase)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el envase con id: " + id
    })
  }
}

// modificar un envase por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Envase.update(request.body, {
      where: { envase_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El envase ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El envase con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el envase con id: ' + id
    })
  }
}

//eliminar un envase
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Envase.destroy({
      where: { envase_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El envase se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El envase con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el envase con id: " + id
    })
  }
}