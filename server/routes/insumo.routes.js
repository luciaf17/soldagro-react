module.exports = app => {
  const insumo = require('../controllers/insumo.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, insumo.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, insumo.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, insumo.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, insumo.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, insumo.delete)

  app.use('/api/insumos', router)
}