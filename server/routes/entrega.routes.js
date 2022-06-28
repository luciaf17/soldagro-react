module.exports = app => {
  const entrega = require('../controllers/entrega.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, entrega.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, entrega.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, entrega.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, entrega.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, entrega.delete)

  app.use('/api/entregas', router)
}