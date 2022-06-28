module.exports = app => {
  const proveedor = require('../controllers/proveedor.controller.js')

  const middleware = require('../utils/middleware')
  const router = require('express').Router()

  router.post('/', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, proveedor.create)
  router.get('/', middleware.tokenExtractor, middleware.userExtractor, proveedor.findAll)
  router.get('/:id', middleware.tokenExtractor, middleware.userExtractor, proveedor.findOne)
  router.put('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, proveedor.update)
  router.delete('/:id', middleware.tokenExtractor, middleware.userExtractor, middleware.adminValidator, proveedor.delete)

  app.use('/api/proveedores', router)
}