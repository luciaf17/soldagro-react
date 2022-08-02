const db = require('../models')
const Deposito = db.deposito

exports.create = async (request, response) => {
  // validar request


  // crear deposito
  const deposito = {
    nombre: request.body.nombre
  }

  try {
    const savedDeposito = await Deposito.create(deposito)
    response.status(201).json(savedDeposito)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un deposito."
    })
  }

}

// traer todos los depositos
exports.findAll = async (request, response) => {
  try {
    const depositos = await Deposito.findAll()
    response.send(depositos)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los depositos."
    })
  }
}

// traer un deposito por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const deposito = await Deposito.findByPk(id)
    response.send(deposito)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el deposito con id: " + id
    })
  }
}

// modificar un deposito por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Deposito.update(request.body, {
      where: { deposito_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El deposito ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El deposito con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el deposito con id: ' + id
    })
  }
}

//eliminar un deposito
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Deposito.destroy({
      where: { deposito_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El deposito se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El deposito con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el deposito con id: " + id
    })
  }
}