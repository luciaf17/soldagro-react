module.exports = app => {
  const material = require('../controllers/material.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, material.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, material.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, material.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, material.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, material.delete)

  app.use('/api/materiales', router)
}