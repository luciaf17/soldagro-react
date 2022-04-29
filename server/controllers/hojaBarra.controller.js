const db = require('../models')
const HojaBarra = db.hojaBarra

exports.create = async (request, response) => {
  // validar request
  /*   if (!request.body.descripcion) {
      response.status(400).send({
        message: "La descripcion no puede estar vacía!"
      })
      return
    } */

  // crear hoja/barra
  const hojaBarra = {
    largo: request.body.largo || null,
    ancho: request.body.ancho || null,
    proveedor_id: request.body.proveedor_id || null,
    materia_prima_id: request.body.materia_prima_id || null,
    deposito_id: request.body.deposito_id || null,
    stock: request.body.stock || null,
  }

  try {
    const savedHojaBarra = await HojaBarra.create(hojaBarra)
    response.status(201).json(savedHojaBarra)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un conjunto."
    })
  }

}

// traer todos las hojas/barra
exports.findAll = async (request, response) => {
  try {
    const hojasBarras = await HojaBarra.findAll()
    response.send(hojasBarras)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener las hojas/barra."
    })
  }
}

// traer un hojaBarra por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const hojaBarra = await HojaBarra.findByPk(id)
    response.send(hojaBarra)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener la hoja/barra con id: " + id
    })
  }
}

// modificar un hojaBarra por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await HojaBarra.update(request.body, {
      where: { hoja_barra_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "La hoja/barra ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `La hoja/barra con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar la hoja/barra con id: ' + id
    })
  }
}

//eliminar un hojaBarra
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await HojaBarra.destroy({
      where: { hoja_barra_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "la hoja/barra se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `La hoja/barra con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar la hoja/barra con id: " + id
    })
  }
}