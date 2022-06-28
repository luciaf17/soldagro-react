module.exports = app => {
  const hojaBarra = require('../controllers/hojaBarra.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, hojaBarra.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, hojaBarra.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, hojaBarra.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, hojaBarra.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, hojaBarra.delete)

  app.use('/api/hojasbarras', router)
}