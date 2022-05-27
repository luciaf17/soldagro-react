const db = require('../models')
const jwt = require('jsonwebtoken')
const Usuario = db.usuario

exports.login = async (request, response) => {

  const { nombre, password } = request.body

  // validar request
  const usuario = await Usuario.findOne({ where: { nombre } })
  const passwordCorrecto = usuario === null ? false : await usuario.compareHash(password, usuario.password)

  if (!(usuario && passwordCorrecto)) {
    return response.status(401).json({
      error: 'Usuario o password inválido'
    })
  }

  const usuarioToken = {
    usuario_id: usuario.usuario_id,
    nombre: usuario.nombre,
  }

  const token = jwt.sign(
    usuarioToken,
    process.env.SECRETKEY,
    { expiresIn: '24h' }
  )

  response.status(200).send({ token, nombre: usuario.nombre, usuario_id: usuario.usuario_id })
}
