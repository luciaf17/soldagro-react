const db = require('../models')
const Cliente = db.cliente

exports.create = async (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }
  // crear cliente
  const cliente = {
    nombre: request.body.nombre,
    direccion: request.body.direccion || null,
    localidad: request.body.localidad || null,
    contacto: request.body.contacto || null,
    iva: request.body.iva || null,
    cuit: request.body.cuit || null,
  }

  try {
    const savedCliente = await Cliente.create(cliente)
    response.status(201).json(savedCliente)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un conjunto."
    })
  }

}

// traer todos los clientes
exports.findAll = async (request, response) => {
  try {
    const clientes = await Cliente.findAll()
    response.send(clientes)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los clientes."
    })
  }
}

// traer un cliente por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const cliente = await Cliente.findByPk(id)
    response.send(cliente)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el cliente con id: " + id
    })
  }
}

// modificar un cliente por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Cliente.update(request.body, {
      where: { cliente_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El cliente ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El cliente con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el cliente con id: ' + id
    })
  }
}

//eliminar un cliente
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Cliente.destroy({
      where: { cliente_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El cliente se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El cliente con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el cliente con id: " + id
    })
  }
}