module.exports = app => {
  const ordenDeTrabajo = require('../controllers/ordenDeTrabajo.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, ordenDeTrabajo.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, ordenDeTrabajo.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, ordenDeTrabajo.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, ordenDeTrabajo.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, ordenDeTrabajo.delete)

  app.use('/api/ordenesdetrabajo', router)
}