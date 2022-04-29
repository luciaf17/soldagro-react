const db = require('../models')
const Sector = db.sector

exports.create = async (request, response) => {
  // validar request
  if (!request.body.nombre) {
    response.status(400).send({
      message: "El nombre no puede estar vacío!"
    })
    return
  }

  // crear sector
  const sector = {
    nombre: request.body.nombre,
    contenedor_id: request.body.contenedor_id
  }

  try {
    const savedSector = await Sector.create(sector)
    response.status(201).json(savedSector)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un sector."
    })
  }

}

// traer todos los sectores
exports.findAll = async (request, response) => {
  try {
    const sectores = await Sector.findAll()
    response.send(sectores)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los sectores."
    })
  }
}

// traer un sector por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const sector = await Sector.findByPk(id)
    response.send(sector)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el sector con id: " + id
    })
  }
}

// modificar un sector por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Sector.update(request.body, {
      where: { sector_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El sector ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El sector con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el sector con id: ' + id
    })
  }
}

//eliminar un sector
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Sector.destroy({
      where: { sector_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El sector se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El sector con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el sector con id: " + id
    })
  }
}