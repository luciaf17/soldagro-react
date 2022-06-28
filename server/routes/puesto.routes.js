module.exports = app => {
  const puesto = require('../controllers/puesto.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, puesto.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, puesto.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, puesto.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, puesto.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, puesto.delete)

  app.use('/api/puestos', router)
}