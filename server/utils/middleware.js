const jwt = require('jsonwebtoken')

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
  console.log(decodedToken)
  request.usuario = decodedToken

  next()
}

module.exports = {
  tokenExtractor,
  userExtractor
}