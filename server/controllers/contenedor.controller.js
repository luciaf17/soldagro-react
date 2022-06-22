const db = require('../models')
const Contenedor = db.contenedor

exports.create = async (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  } else if (!request.body.puesto) {
    response.status(400).send({
      message: "El puesto no puede estar vacío!"
    })
    return
  }

  // crear contenedor
  const contenedor = {
    nombre: request.body.nombre,
    puesto_id: request.body.puesto
  }

  try {
    const savedContenedor = await Contenedor.create(contenedor)
    response.status(201).json(savedContenedor)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un contenedor."
    })
  }

}

// traer todos los contenedores
exports.findAll = async (request, response) => {
  try {
    const contenedores = await Contenedor.findAll()
    response.send(contenedores)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los contenedores."
    })
  }
}

// traer un contenedor por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const contenedor = await Contenedor.findByPk(id)
    response.send(contenedor)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el contenedor con id: " + id
    })
  }
}
// modificar un contenedor por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Contenedor.update(request.body, {
      where: { contenedor_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El contenedor ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El contenedor con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el contenedor con id: ' + id
    })
  }
}

//eliminar un contenedor
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Contenedor.destroy({
      where: { contenedor_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El contenedor se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El contenedor con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el contenedor con id: " + id
    })
  }
}