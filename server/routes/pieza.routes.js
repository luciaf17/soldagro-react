module.exports = app => {
  const pieza = require('../controllers/pieza.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, pieza.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, pieza.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, pieza.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, pieza.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, pieza.delete)

  app.use('/api/piezas', router)
}