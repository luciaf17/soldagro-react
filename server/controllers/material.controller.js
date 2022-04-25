const db = require('../models')
const Material = db.material

exports.create = (request, response) => {
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

  Material.create(material)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar crear un material."
      })
    })
}

// traer todos los codigos de material
exports.findAll = (request, response) => {
  Material.findAll()
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Ha ocurrido un error al intentar obtener los codigos de material."
      })
    })
}

// traer un material por id
exports.findOne = (request, response) => {
  const id = request.params.id

  Material.findByPk(id)
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar obtener el material con id: " + id
      })
    })
}

// modificar un material por id
exports.update = (request, response) => {
  const id = request.params.id

  Material.update(request.body, {
    where: { material_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El material ha sido actualizado correctamente.",
        })
      } else {
        response.send({
          message: `El material con id: ${id} no se pudo actualizar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: 'Ha ocurrido un error al intentar actualizar el material con id: ' + id
      })
    })
}

exports.delete = (request, response) => {
  const id = request.params.id

  Material.destroy({
    where: { material_id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "El material se ha eliminado con exito!"
        })
      } else {
        response.send({
          message: `El material con id: ${id} no se pudo eliminar.`
        })
      }
    })
    .catch(error => {
      response.status(500).send({
        message: "Ha ocurrido un error al intentar eliminar el material con id: " + id
      })
    })
}