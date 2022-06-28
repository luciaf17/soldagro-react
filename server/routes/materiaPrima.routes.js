module.exports = app => {
  const materiaPrima = require('../controllers/materiaPrima.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, materiaPrima.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, materiaPrima.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, materiaPrima.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, materiaPrima.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, materiaPrima.delete)

  app.use('/api/materiasprimas', router)
}