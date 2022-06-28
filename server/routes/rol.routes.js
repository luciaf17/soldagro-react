module.exports = app => {
  const rol = require('../controllers/rol.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, rol.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, rol.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, rol.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, rol.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, rol.delete)

  app.use('/api/roles', router)
}