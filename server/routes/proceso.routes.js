module.exports = app => {
  const proceso = require('../controllers/proceso.controller')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, proceso.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, proceso.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, proceso.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, proceso.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, proceso.delete)

  app.use('/api/procesos', router)
}