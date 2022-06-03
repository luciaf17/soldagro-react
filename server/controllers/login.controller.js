const db = require('../models')
const jwt = require('jsonwebtoken')
const Usuario = db.usuario

exports.login = async (request, response) => {

  const { username, password } = request.body

  // VALIDAR REQUEST
  // chequeo si el usuario a loguear existe en la base de datos por username
  const usuario = await Usuario.findOne({ where: { username } })
  // si el usuario no existe (null) devuelvo false, sino devuelvo el booleano
  // de la comparación entre el password recibido en la request 
  // con el hash del password guardado en la db del usuario encontrado
  const passwordCorrecto = usuario === null ? false : await usuario.compareHash(password, usuario.password)

  // si el usuario no existe y/o el password es incorrecto devuelvo error
  // sino creo un objeto de usuario para crear y guardar en el token
  if (!(usuario && passwordCorrecto)) {
    return response.status(401).json({
      error: 'Usuario o password inválido'
    })
  }

  const usuarioToken = {
    usuario_id: usuario.usuario_id,
    username: usuario.username,
  }

  // para crear el token se pasa el usuarioToken creado, la clave secreta
  // y opcionalmente el tiempo de expiración de token
  const token = jwt.sign(
    usuarioToken,
    process.env.SECRETKEY,
    { expiresIn: '12h' }
  )

  response.status(200).send({ token, username: usuario.username, usuario_id: usuario.usuario_id })
}
