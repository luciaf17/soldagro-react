module.exports = app => {
  const subconjunto = require('../controllers/subconjunto.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, subconjunto.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, subconjunto.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, subconjunto.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, subconjunto.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, subconjunto.delete)

  app.use('/api/subconjuntos', router)
}