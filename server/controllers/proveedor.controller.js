const db = require('../models')
const Proveedor = db.proveedor

exports.create = async (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear proveedor
  const proveedor = {
    nombre: request.body.nombre,
    direccion: request.body.direccion || null,
    localidad: request.body.localidad || null,
    contacto: request.body.contacto || null,
    cuit: request.body.cuit || null
  }

  try {
    const savedProveedor = await Proveedor.create(proveedor)
    response.status(201).json(savedProveedor)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un proveedor."
    })
  }

}

// traer todos los proveedores
exports.findAll = async (request, response) => {
  try {
    const proveedores = await Proveedor.findAll()
    response.send(proveedores)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los proveedores."
    })
  }
}

// traer un proveedor por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const proveedor = await Proveedor.findByPk(id)
    response.send(proveedor)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el proveedor con id: " + id
    })
  }
}

// modificar un proveedor por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Proveedor.update(request.body, {
      where: { proveedor_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El proveedor ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El proveedor con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el proveedor con id: ' + id
    })
  }
}

//eliminar un proveedor
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Proveedor.destroy({
      where: { proveedor_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El proveedor se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El proveedor con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el proveedor con id: " + id
    })
  }
}