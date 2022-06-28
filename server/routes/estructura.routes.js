module.exports = app => {
  const estructura = require('../controllers/estructura.controller')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, estructura.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, estructura.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, estructura.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, estructura.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, estructura.delete)

  app.use('/api/estructuras', router)
}