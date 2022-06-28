module.exports = app => {
  const despacho = require('../controllers/despacho.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, despacho.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, despacho.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, despacho.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, despacho.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, despacho.delete)

  app.use('/api/despachos', router)
}