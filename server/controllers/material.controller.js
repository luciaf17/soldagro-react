const db = require('../models')
const Material = db.material

exports.create = async (request, response) => {
  // validar request
  if (!request.body.codigo_material) {
    response.status(400).send({
      message: "El codigo de material no puede estar vacío!"
    })
    return
  }

  // crear material
  const material = {
    codigo_material: request.body.codigo_material,
  }

  try {
    const savedMaterial = await Material.create(material)
    response.status(201).json(savedMaterial)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un material."
    })
  }

}

// traer todos los materiales
exports.findAll = async (request, response) => {
  try {
    const materiales = await Material.findAll()
    response.send(materiales)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los materiales."
    })
  }
}

// traer un material por id
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const material = await Material.findByPk(id)
    response.send(material)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el material con id: " + id
    })
  }
}

// modificar un material por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Material.update(request.body, {
      where: { material_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El material ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El material con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el material con id: ' + id
    })
  }
}

//eliminar un material
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Material.destroy({
      where: { material_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El material se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El material con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el material con id: " + id
    })
  }
}