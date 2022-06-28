module.exports = app => {
  const tipoPuesto = require('../controllers/tipoPuesto.controller')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, tipoPuesto.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, tipoPuesto.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, tipoPuesto.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, tipoPuesto.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, tipoPuesto.delete)

  app.use('/api/tipospuestos', router)
}