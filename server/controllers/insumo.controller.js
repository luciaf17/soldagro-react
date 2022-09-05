const db = require('../models')
const Insumo = db.insumo

exports.create = async (request, response) => {
  // validar request
  if (!request.body.descripcion) {
    response.status(400).send({
      message: "La descripción no puede estar vacía!"
    })
    return
  }

  // crear insumo
  const insumo = {
    descripcion: request.body.descripcion,
    marca: request.body.marca || null,
    tamanio: request.body.tamanio || null,
    unidad_medida: request.body.unidad_medida || null,
    precio: request.body.precio || null,
    proveedor_id: request.body.proveedor || null,
    deposito_id: request.body.deposito || null,
    stock: request.body.stock || null,
  }

  try {
    const savedInsumo = await Insumo.create(insumo)
    response.status(201).json(savedInsumo)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un insumo."
    })
  }

}

// traer todos los insumos
exports.findAll = async (request, response) => {
  try {
    const insumos = await Insumo.findAll({ include: { all: true }, attributes: { exclude: ['proveedor_id', 'deposito_id'] } })
    response.send(insumos)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los insumos."
    })
  }
}

// traer un insumo por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const insumo = await Insumo.findByPk(id)
    response.send(insumo)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el insumo con id: " + id
    })
  }
}

// modificar un insumo por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Insumo.update(request.body, {
      where: { insumo_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El insumo ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El insumo con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el insumo con id: ' + id
    })
  }
}

//eliminar un insumo
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Insumo.destroy({
      where: { insumo_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El insumo se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El insumo con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el insumo con id: " + id
    })
  }
}