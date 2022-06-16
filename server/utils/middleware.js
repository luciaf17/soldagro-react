const jwt = require('jsonwebtoken')
const Usuario = require('../models').usuario
const Rol = require('../models').rol

// MIDDLEWARES - SON FUNCIONES QUE SE EJECUTAN PRE-REQUEST O PRE-RESPONSE DE LA API
// ASI COMO TAMBIEN PUEDEN INVOCAR A LA SIGUIENTE FUNCION MIDDLEWARE CON NEXT()

// EXTRAER TOKEN DEL HEADER
const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }
  next()
}

// VERIFICAR QUE EL TOKEN SEA VALIDO (POR SECRET KEY Y POR FECHA EXPIRACION)
// EXTRAER USUARIO DEL TOKEN
const userExtractor = (request, response, next) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRETKEY)
  if (!request.token || !decodedToken.usuario_id) {
    return response.status(401).json({
      error: 'No se encuentra el token o es inválido'
    })
  }
  request.usuario = decodedToken

  next()
}

// VALIDAR SI EL USUARIO QUE HACE LA REQUEST TIENE ROL ADMINISTRADOR

// se hace JSON.parse(JSON.stringify(obj)) ya que Sequelize
// trae un objeto convertido en modelo con una estructura compleja;
// una vez convertido en JSON es un 'objeto' más simple, pero a su vez
// hay que parsearlo para que sea un objeto js válido y sea manipulable.
// No es una buena práctica para clonado de objetos, pero en este caso sirve

const adminValidator = async (request, response, next) => {
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

  usuarioRequester = JSON.parse(JSON.stringify(usuarioRequester))

  // HARDCODED
  if (!(usuarioRequester.rol.find(rol => rol.nombre === 'Administrador'))) {
    return response.status(401).json({
      error: 'No cuenta con los permisos necesarios para realizar esta acción.'
    })
  }
  next()
}

module.exports = {
  tokenExtractor,
  userExtractor,
  adminValidator
}