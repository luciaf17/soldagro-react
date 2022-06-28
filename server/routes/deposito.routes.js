module.exports = app => {
  const deposito = require('../controllers/deposito.controller.js')
  const middleware = require('../utils/middleware')

  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, deposito.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, deposito.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, deposito.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, deposito.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, deposito.delete)

  app.use('/api/depositos', router)
}