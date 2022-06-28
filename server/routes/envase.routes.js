module.exports = app => {
  const envase = require('../controllers/envase.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, envase.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, envase.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, envase.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, envase.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, envase.delete)

  app.use('/api/envases', router)
}