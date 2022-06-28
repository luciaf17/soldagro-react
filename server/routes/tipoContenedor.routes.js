module.exports = app => {
  const tipoContenedor = require('../controllers/tipoContenedor.controller')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, tipoContenedor.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, tipoContenedor.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, tipoContenedor.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, tipoContenedor.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, tipoContenedor.delete)

  app.use('/api/tiposcontenedores', router)
}