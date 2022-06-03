const db = require('../models')
const Usuario = db.usuario
const Rol = db.rol

exports.create = async (request, response) => {

  // VALIDO SI EL USUARIO QUE HACE LA REQUEST TIENE ROL ADMINISTRADOR
  let usuarioRequester = request.usuario.usuario_id
  usuarioRequester = await Usuario.findByPk(usuarioRequester,
    {
      include: {
        model: Rol,
        as: 'rol',
        through: {
          attributes: []
        }
      }
    }
  )
  // se hace JSON.parse(JSON.stringify(obj)) ya que Sequelize
  // trae un objeto convertido en modelo con una estructura compleja;
  // una vez convertido en JSON es un 'objeto' más simple, pero a su vez
  // hay que parsearlo para que sea un objeto js válido y sea manipulable.
  // No es una buena práctica para clonado de objetos, pero en este caso sirve
  usuarioRequester = JSON.parse(JSON.stringify(usuarioRequester))
  // HARDCODEADO! esto es válido si 'Administrador' es el nombre del rol
  // de Administrador lo cual seguramente vaya a ser así.
  if (!(usuarioRequester.rol.find(rol => rol.nombre === 'Administrador'))) {
    return response.status(401).send({
      error: 'No cuenta con los permisos necesarios para realizar esta acción'
    })
  }

  // COMIENZA EFECTIVAMENTE LA REQUEST

  const { username, password, rol } = request.body

  // validar request
  if (!username) {
    response.status(400).send({
      message: "¡El username de usuario no puede estar vacío!"
    })
    return
  }
  if (!password) {
    response.status(400).send({
      message: "¡El password no puede estar vacío!"
    })
  }

  const usuarioExistente = await Usuario.findOne({ where: { username } })
  if (usuarioExistente) {
    return response.status(400).send({
      error: "Ya existe un usuario con el mismo nombre de usuario. El usuario debe ser único"
    })
  }


  // crear usuario
  const usuario = {
    username,
    password
  }

  try {
    const savedUsuario = await Usuario.create(usuario)
    await savedUsuario.addRol(await Rol.findByPk(rol))
    response.status(201).json(savedUsuario)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar crear un usuario."
    })
  }

}

// traer todos los usuarios
exports.findAll = async (request, response) => {
  try {
    const usuarios = await Usuario.findAll()
    response.json(usuarios)
  } catch (error) {
    response.status(500).send({
      message: error.message || "Ha ocurrido un error al intentar obtener los usuarios."
    })
  }
}

// traer un usuario por id, incluidos los roles
exports.findOne = async (request, response) => {
  const id = request.params.id
  try {
    const usuario = await Usuario.findByPk(id, {
      include: {
        model: Rol,
        as: 'rol',
        through: {
          attributes: []
        }
      }
    })
    response.send(usuario)
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar obtener el usuario con id: " + id
    })
  }
}

// modificar un usuario por id
exports.update = async (request, response) => {
  const id = request.params.id

  try {
    const estadoUpdate = await Usuario.update(request.body, {
      where: { usuario_id: id }
    })
    if (estadoUpdate == 1) {
      response.send({
        message: "El usuario ha sido actualizado correctamente.",
      })
    }
    else {
      response.send({
        message: `El usuario con id: ${id} no se pudo actualizar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: 'Ha ocurrido un error al intentar actualizar el usuario con id: ' + id
    })
  }
}

//eliminar un usuario
exports.delete = async (request, response) => {
  const id = request.params.id

  try {
    const estadoDelete = await Usuario.destroy({
      where: { usuario_id: id }
    })
    if (estadoDelete == 1) {
      response.send({
        message: "El usuario se ha eliminado con exito!"
      })
    } else {
      response.send({
        message: `El usuario con id: ${id} no se pudo eliminar.`
      })
    }
  } catch (error) {
    response.status(500).send({
      message: "Ha ocurrido un error al intentar eliminar el usuario con id: " + id
    })
  }
}