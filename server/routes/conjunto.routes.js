module.exports = app => {
  const conjunto = require('../controllers/conjunto.controller.js')
  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, conjunto.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, conjunto.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, conjunto.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, conjunto.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, conjunto.delete)

  app.use('/api/conjuntos', router)
}