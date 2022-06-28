module.exports = app => {
  const contenedor = require('../controllers/contenedor.controller.js')
  const middleware = require('../utils/middleware')

  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, contenedor.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, contenedor.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, contenedor.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, contenedor.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, contenedor.delete)

  app.use('/api/contenedores', router)
}