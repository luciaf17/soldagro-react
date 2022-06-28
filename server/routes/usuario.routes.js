module.exports = app => {
  const usuario = require('../controllers/usuario.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuario.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuario.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuario.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuario.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, usuario.delete)

  app.use('/api/usuarios', router)
}